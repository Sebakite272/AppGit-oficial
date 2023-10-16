import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { NoDispoPage } from './no-dispo.page';

const routes: Routes = [
  {
    path: '',
    component: NoDispoPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class NoDispoPageRoutingModule {}
