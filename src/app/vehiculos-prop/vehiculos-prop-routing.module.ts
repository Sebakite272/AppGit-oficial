import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { VehiculosPropPage } from './vehiculos-prop.page';

const routes: Routes = [
  {
    path: '',
    component: VehiculosPropPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class VehiculosPropPageRoutingModule {}
