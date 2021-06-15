import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '../shared';
import { CorrespondentsRoutingModule } from './correspondents-routing.module';

@NgModule({
  declarations: [
    CorrespondentsRoutingModule.components
  ],
  imports: [
    CommonModule,
    SharedModule,
    CorrespondentsRoutingModule
  ]
})
export class CorrespondentsModule {}
