import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ErrorPaginaPageRoutingModule } from './error-pagina-routing.module';

import { ErrorPaginaPage } from './error-pagina.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ErrorPaginaPageRoutingModule
  ],
  declarations: [ErrorPaginaPage]
})
export class ErrorPaginaPageModule {}
