import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { Reserva2PageRoutingModule } from './reserva2-routing.module';

import { Reserva2Page } from './reserva2.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    Reserva2PageRoutingModule
  ],
  declarations: [Reserva2Page]
})
export class Reserva2PageModule {}
