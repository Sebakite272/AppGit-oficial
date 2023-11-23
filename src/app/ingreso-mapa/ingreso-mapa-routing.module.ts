import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { IngresoMapaPage } from './ingreso-mapa.page';

const routes: Routes = [
  {
    path: '',
    component: IngresoMapaPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class IngresoMapaPageRoutingModule {}
