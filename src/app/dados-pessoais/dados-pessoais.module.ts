import { CommonModule } from '@angular/common';
import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { HeaderModule } from '../components/header/header.module';
import { StepperModule } from '../components/stepper/stepper.module';
import { DadosPessoaisPageRoutingModule } from './dados-pessoais-routing.module';
import { DadosPessoaisPage } from './dados-pessoais.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    DadosPessoaisPageRoutingModule,
    HeaderModule,
    StepperModule,
  ],
  declarations: [DadosPessoaisPage],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class DadosPessoaisPageModule {}
