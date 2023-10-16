import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SuccessScPage } from './success-sc.page';

const routes: Routes = [
  {
    path: '',
    component: SuccessScPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SuccessScPageRoutingModule {}
