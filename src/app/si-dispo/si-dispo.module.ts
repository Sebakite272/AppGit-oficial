import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { SiDispoPageRoutingModule } from './si-dispo-routing.module';

import { SiDispoPage } from './si-dispo.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    SiDispoPageRoutingModule
  ],
  declarations: [SiDispoPage]
})
export class SiDispoPageModule {}
