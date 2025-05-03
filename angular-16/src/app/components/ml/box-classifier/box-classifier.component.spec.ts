import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BoxClassifierComponent } from './box-classifier.component';

describe('BoxClassifierComponent', () => {
  let component: BoxClassifierComponent;
  let fixture: ComponentFixture<BoxClassifierComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [BoxClassifierComponent]
    });
    fixture = TestBed.createComponent(BoxClassifierComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
