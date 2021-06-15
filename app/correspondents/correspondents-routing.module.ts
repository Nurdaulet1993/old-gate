import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { CorrespondentsComponent } from './correspondents.component';

const routes: Routes = [
  { path: '', component: CorrespondentsComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CorrespondentsRoutingModule {
  static components = [CorrespondentsComponent];
}
