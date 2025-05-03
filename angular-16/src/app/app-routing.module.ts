import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { FullComponent } from './layouts/full/full.component';
import { SalesComponent } from './components/powerbi/sales/sales.component';
import { PredictRevenueComponent } from './components/ml/predict-revenue/predict-revenue.component';
import { SentimentReviewComponent } from './components/ml/sentiment-review/sentiment-review.component';
import { BoxClassifierComponent } from './components/ml/box-classifier/box-classifier.component';
import { OverviewComponent } from './components/powerbi/overview/overview.component';
import { StockComponent } from './components/powerbi/stock/stock.component';
import { ProductionComponent } from './components/powerbi/production/production.component';
import { ClusteringComponent } from './components/powerbi/clustering/clustering.component';
import { TimeseriesComponent } from './components/powerbi/timeseries/timeseries.component';
import { Sales2Component } from './components/powerbi/sales2/sales2.component';

export const Approutes: Routes = [
  {
    path: '',
    component: FullComponent,
    children: [
      { path: '', redirectTo: '/dashboard', pathMatch: 'full' },
      {
        path: 'dashboard',
        loadChildren: () => import('./dashboard/dashboard.module').then(m => m.DashboardModule)
      },
      {
        path: 'about',
        loadChildren: () => import('./about/about.module').then(m => m.AboutModule)
      },
      {
        path: 'component',
        loadChildren: () => import('./component/component.module').then(m => m.ComponentsModule)
      },

        // Power BI pages
        {
          path: 'bi/overview',
          component: OverviewComponent
        },
        {
          path: 'bi/sales',
          component: SalesComponent
        },
        {
          path: 'bi/sales2',
          component: Sales2Component
        },
        {
          path: 'bi/stock',
          component: StockComponent
        },
        {
          path: 'bi/production',
          component: ProductionComponent
        },
        {
          path: 'bi/clustering',
          component: ClusteringComponent
        },
        {
          path: 'bi/timeseries',
          component: TimeseriesComponent
        },
        
      // ML pages
      { path: 'ml/predict-revenue', component: PredictRevenueComponent },
      { path: 'ml/sentiment-review', component: SentimentReviewComponent },
      { path: 'ml/box-classifier', component: BoxClassifierComponent },

      { path: '', redirectTo: 'bi/overview', pathMatch: 'full' },

    ]
  },
  {
    path: '**',
    redirectTo: '/starter'
  }
];
