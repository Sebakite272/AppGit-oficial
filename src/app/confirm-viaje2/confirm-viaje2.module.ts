import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ConfirmViaje2PageRoutingModule } from './confirm-viaje2-routing.module';

import { ConfirmViaje2Page } from './confirm-viaje2.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ConfirmViaje2PageRoutingModule
  ],
  declarations: [ConfirmViaje2Page]
})
export class ConfirmViaje2PageModule {}
