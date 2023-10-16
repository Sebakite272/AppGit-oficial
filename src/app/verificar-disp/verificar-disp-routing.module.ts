import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { VerificarDispPage } from './verificar-disp.page';

const routes: Routes = [
  {
    path: '',
    component: VerificarDispPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class VerificarDispPageRoutingModule {}
