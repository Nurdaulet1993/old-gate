import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from '../../shared';
import { RouterModule } from '@angular/router';

import { DefaultComponent } from './default.component';
import { HeaderComponent } from '../../shared';
import { NavComponent } from '../../shared';

@NgModule({
  declarations: [
    DefaultComponent,
    HeaderComponent,
    NavComponent
  ],
  imports: [
    CommonModule,
    SharedModule,
    RouterModule
  ],
  exports: [
    DefaultComponent
  ]
})
export class DefaultModule { }
