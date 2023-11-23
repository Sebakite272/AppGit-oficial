import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { IngresoMapaPageRoutingModule } from './ingreso-mapa-routing.module';

import { IngresoMapaPage } from './ingreso-mapa.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    IngresoMapaPageRoutingModule
  ],
  declarations: [IngresoMapaPage]
})
export class IngresoMapaPageModule {}
