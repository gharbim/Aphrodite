import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {
  CommonModule, LocationStrategy,
  PathLocationStrategy
} from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule, HttpClient } from '@angular/common/http';
import { Routes, RouterModule } from '@angular/router';

import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { FullComponent } from './layouts/full/full.component';


import { NavigationComponent } from './shared/header/navigation.component';
import { SidebarComponent } from './shared/sidebar/sidebar.component';

import { Approutes } from './app-routing.module';
import { AppComponent } from './app.component';
import { SpinnerComponent } from './shared/spinner.component';
import { OverviewComponent } from './components/powerbi/overview/overview.component';
import { SalesComponent } from './components/powerbi/sales/sales.component';
import { StockComponent } from './components/powerbi/stock/stock.component';
import { ProductionComponent } from './components/powerbi/production/production.component';
import { ClusteringComponent } from './components/powerbi/clustering/clustering.component';
import { TimeseriesComponent } from './components/powerbi/timeseries/timeseries.component';
import { PredictRevenueComponent } from './components/ml/predict-revenue/predict-revenue.component';
import { SentimentReviewComponent } from './components/ml/sentiment-review/sentiment-review.component';
import { BoxClassifierComponent } from './components/ml/box-classifier/box-classifier.component';
import { SafePipe } from './shared/pipes/safe.pipe';
import { Sales2Component } from './components/powerbi/sales2/sales2.component';


@NgModule({
  declarations: [
    AppComponent,
    SpinnerComponent,
    OverviewComponent,
    SalesComponent,
    StockComponent,
    ProductionComponent,
    ClusteringComponent,
    TimeseriesComponent,
    PredictRevenueComponent,
    SentimentReviewComponent,
    BoxClassifierComponent,
    SafePipe,
    Sales2Component,
  
  ],
  imports: [
    CommonModule,
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    NgbModule,
    RouterModule.forRoot(Approutes, { useHash: false }),
    FullComponent,
    NavigationComponent,
    SidebarComponent,
  ],
  providers: [
    {
      provide: LocationStrategy,
      useClass: PathLocationStrategy
    },
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
