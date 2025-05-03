import { Component } from '@angular/core';
import { MlService } from 'src/app/services/ml.service';

@Component({
  selector: 'app-sentiment-review',
  templateUrl: './sentiment-review.component.html',
  styleUrls: ['./sentiment-review.component.scss']
})
export class SentimentReviewComponent {
  reviewText = '';
  sentiment: string | null = null;
  score: number | null = null;

  constructor(private mlService: MlService) {}

  analyzeReview() {
    this.mlService.analyzeReview({ review: this.reviewText }).subscribe({
      next: (res: any) => {
        this.sentiment = res.sentiment;
        this.score = res.score;
      },
      error: (err) => alert('Sentiment analysis failed: ' + err.message)
    });
  }
}
