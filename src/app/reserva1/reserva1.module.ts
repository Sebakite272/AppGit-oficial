import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { Reserva1PageRoutingModule } from './reserva1-routing.module';

import { Reserva1Page } from './reserva1.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    Reserva1PageRoutingModule
  ],
  declarations: [Reserva1Page]
})
export class Reserva1PageModule {}

