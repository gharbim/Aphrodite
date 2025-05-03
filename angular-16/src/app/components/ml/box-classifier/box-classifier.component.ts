import { Component } from '@angular/core';
import { MlService } from 'src/app/services/ml.service';

@Component({
  selector: 'app-box-classifier',
  templateUrl: './box-classifier.component.html',
  styleUrls: ['./box-classifier.component.scss']
})
export class BoxClassifierComponent {
  selectedFile!: File;
  result: string | null = null;
  imageUrl: string | null = null;

  constructor(private mlService: MlService) {}

  onFileSelected(event: any) {
    this.selectedFile = event.target.files[0];
  }

  classifyImage() {
    const formData = new FormData();
    formData.append('image', this.selectedFile);

    this.mlService.classifyImage(formData).subscribe({
      next: (res: any) => {
        this.result = res.result;
        this.imageUrl = res.image_url;
      },
      error: (err) => alert('Classification failed: ' + err.message)
    });
  }
}
