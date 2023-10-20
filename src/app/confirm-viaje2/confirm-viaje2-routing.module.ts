import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ConfirmViaje2Page } from './confirm-viaje2.page';

const routes: Routes = [
  {
    path: '',
    component: ConfirmViaje2Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ConfirmViaje2PageRoutingModule {}
