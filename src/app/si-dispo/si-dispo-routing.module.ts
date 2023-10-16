import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SiDispoPage } from './si-dispo.page';

const routes: Routes = [
  {
    path: '',
    component: SiDispoPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SiDispoPageRoutingModule {}
