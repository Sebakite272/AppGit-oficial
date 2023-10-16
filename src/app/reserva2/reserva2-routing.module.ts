import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Reserva2Page } from './reserva2.page';

const routes: Routes = [
  {
    path: '',
    component: Reserva2Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class Reserva2PageRoutingModule {}
