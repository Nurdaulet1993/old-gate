import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '@shared/index';
import { AnalyticsRoutingModule } from './analytics-routing.module';

import { StoreModule } from '@ngrx/store';
import { reducer } from './state/analytics.reducer';

@NgModule({
  declarations: [
    AnalyticsRoutingModule.components
  ],
  imports: [
    CommonModule,
    SharedModule,
    AnalyticsRoutingModule,
    StoreModule.forFeature( 'analytics', reducer)
  ]
})
export class AnalyticsModule { }
