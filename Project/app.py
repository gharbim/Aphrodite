from flask import Flask, request, jsonify
from flask_cors import CORS
import torch
import torchvision.transforms as transforms
from torchvision import models
from PIL import Image
import os
import nltk
from nltk.sentiment.vader import SentimentIntensityAnalyzer
import joblib
import numpy as np

nltk.download('vader_lexicon')

app = Flask(__name__)
CORS(app)  # Permettre les appels CORS depuis Angular (localhost:4200)
app.config['UPLOAD_FOLDER'] = 'static/uploads'

# Load the box classifier model
model = models.resnet18(weights=None)
model.fc = torch.nn.Linear(model.fc.in_features, 2)
model.load_state_dict(torch.load('box_classifier_resnet18.pth', map_location=torch.device('cpu')))
model.eval()

# Load Revenue Prediction model and its feature columns
revenue_model = joblib.load('revenue_model.pkl')
revenue_features = joblib.load('revenue_model_columns.pkl')

# Extract available Brand Names
available_brands = [feat.replace('BrandName_', '') for feat in revenue_features if feat.startswith('BrandName_')]

# Define image transform
transform = transforms.Compose([
    transforms.Resize((224, 224)),
    transforms.ToTensor(),
])

# VADER sentiment analyzer
analyzer = SentimentIntensityAnalyzer()


@app.route('/predict', methods=['POST'])
def predict():
    try:
        data = request.get_json()
        year = int(data['year'])
        month = int(data['month'])
        avg_unit_price = float(data['avg_unit_price'])
        total_quantity = int(data['total_quantity'])
        brand = data['brand']

        input_data = {
            'year': year,
            'month': month,
            'Avg_Unit_Price': avg_unit_price,
            'Total_Quantity': total_quantity,
        }

        for col in revenue_features:
            if col.startswith('BrandName_'):
                input_data[col] = 1 if col == f'BrandName_{brand}' else 0

        X_input = np.array([input_data[feat] for feat in revenue_features]).reshape(1, -1)
        revenue_prediction = revenue_model.predict(X_input)[0]
        revenue_prediction = max(0, revenue_prediction)

        return jsonify(revenue_prediction)
    except Exception as e:
        return jsonify({'error': str(e)}), 500


@app.route('/review', methods=['POST'])
def review():
    try:
        data = request.get_json()
        review_text = data.get('review', '')
        scores = analyzer.polarity_scores(review_text)
        compound = scores['compound']
        sentiment = 'Positive' if compound >= 0.05 else 'Negative' if compound <= -0.05 else 'Neutral'
        return jsonify({
            'sentiment': sentiment,
            'score': compound
        })
    except Exception as e:
        return jsonify({'error': str(e)}), 500


@app.route('/box', methods=['POST'])
def box():
    try:
        if 'image' not in request.files:
            return jsonify({'error': 'No image uploaded'}), 400

        file = request.files['image']
        if not file.mimetype.startswith('image/'):
            return jsonify({'error': 'Invalid file type'}), 400

        os.makedirs(app.config['UPLOAD_FOLDER'], exist_ok=True)
        img_path = os.path.join(app.config['UPLOAD_FOLDER'], file.filename)
        file.save(img_path)

        image = Image.open(img_path).convert('RGB')
        img_tensor = transform(image).unsqueeze(0)

        with torch.no_grad():
            outputs = model(img_tensor)
            _, predicted = torch.max(outputs, 1)
            probs = torch.nn.functional.softmax(outputs, dim=1)
            confidence = probs[0][predicted.item()] * 100
            predicted_class = 'Good Packaging' if predicted.item() == 1 else 'Defective Packaging'
            emoji = '✅' if predicted_class == 'Good Packaging' else '❌'
            result = f"{emoji} {predicted_class} ({confidence:.2f}% confidence)"

        return jsonify({
            'result': result,
            'image_url': f"http://localhost:5000/{img_path.replace(os.sep, '/')}"
        })

    except Exception as e:
        return jsonify({'error': str(e)}), 500


@app.route('/brands', methods=['GET'])
def get_brands():
    return jsonify(available_brands)


if __name__ == '__main__':
    os.makedirs(app.config['UPLOAD_FOLDER'], exist_ok=True)
    app.run(debug=True)
