import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ViajeExitoso22PageRoutingModule } from './viaje-exitoso22-routing.module';

import { ViajeExitoso22Page } from './viaje-exitoso22.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ViajeExitoso22PageRoutingModule
  ],
  declarations: [ViajeExitoso22Page]
})
export class ViajeExitoso22PageModule {}
