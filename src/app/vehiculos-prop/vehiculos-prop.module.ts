import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { VehiculosPropPageRoutingModule } from './vehiculos-prop-routing.module';

import { VehiculosPropPage } from './vehiculos-prop.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    VehiculosPropPageRoutingModule
  ],
  declarations: [VehiculosPropPage]
})
export class VehiculosPropPageModule {}
