import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { HeaderModule } from '../components/header/header.module';
import { StepperModule } from '../components/stepper/stepper.module';

import { ConfirmaDadosPageRoutingModule } from './confirma-dados-routing.module';

import { ConfirmaDadosPage } from './confirma-dados.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ConfirmaDadosPageRoutingModule,
    HeaderModule,
    StepperModule,
  ],
  declarations: [ConfirmaDadosPage]
})
export class ConfirmaDadosPageModule {}
