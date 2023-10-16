import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ViajeExitosoPageRoutingModule } from './viaje-exitoso-routing.module';

import { ViajeExitosoPage } from './viaje-exitoso.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ViajeExitosoPageRoutingModule
  ],
  declarations: [ViajeExitosoPage]
})
export class ViajeExitosoPageModule {}
