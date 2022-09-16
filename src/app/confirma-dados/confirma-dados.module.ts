import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ConfirmaDadosPageRoutingModule } from './confirma-dados-routing.module';

import { ConfirmaDadosPage } from './confirma-dados.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ConfirmaDadosPageRoutingModule
  ],
  declarations: [ConfirmaDadosPage]
})
export class ConfirmaDadosPageModule {}
