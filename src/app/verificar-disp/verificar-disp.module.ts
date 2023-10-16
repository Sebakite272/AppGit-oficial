import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { VerificarDispPageRoutingModule } from './verificar-disp-routing.module';

import { VerificarDispPage } from './verificar-disp.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    VerificarDispPageRoutingModule
  ],
  declarations: [VerificarDispPage]
})
export class VerificarDispPageModule {}
