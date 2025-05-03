import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TimeseriesComponent } from './timeseries.component';

describe('TimeseriesComponent', () => {
  let component: TimeseriesComponent;
  let fixture: ComponentFixture<TimeseriesComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [TimeseriesComponent]
    });
    fixture = TestBed.createComponent(TimeseriesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
