import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { NoDispoPageRoutingModule } from './no-dispo-routing.module';

import { NoDispoPage } from './no-dispo.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    NoDispoPageRoutingModule
  ],
  declarations: [NoDispoPage]
})
export class NoDispoPageModule {}
