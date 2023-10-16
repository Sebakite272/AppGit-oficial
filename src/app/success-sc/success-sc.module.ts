import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { SuccessScPageRoutingModule } from './success-sc-routing.module';

import { SuccessScPage } from './success-sc.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    SuccessScPageRoutingModule
  ],
  declarations: [SuccessScPage]
})
export class SuccessScPageModule {}
