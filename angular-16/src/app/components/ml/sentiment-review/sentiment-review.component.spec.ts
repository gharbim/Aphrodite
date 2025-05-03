import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SentimentReviewComponent } from './sentiment-review.component';

describe('SentimentReviewComponent', () => {
  let component: SentimentReviewComponent;
  let fixture: ComponentFixture<SentimentReviewComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SentimentReviewComponent]
    });
    fixture = TestBed.createComponent(SentimentReviewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
