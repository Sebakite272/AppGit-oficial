import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ViajeExitoso22Page } from './viaje-exitoso22.page';

const routes: Routes = [
  {
    path: '',
    component: ViajeExitoso22Page
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ViajeExitoso22PageRoutingModule {}
