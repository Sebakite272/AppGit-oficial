import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Reserva1Page } from './reserva1.page';

const routes: Routes = [
  {
    path: '',
    component: Reserva1Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class Reserva1PageRoutingModule {}
