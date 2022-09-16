import { CommonModule } from '@angular/common';
import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { HeaderModule } from '../components/header/header.module';
import { StepperModule } from '../components/stepper/stepper.module';
import { FaculdadeRepository } from '../repositories/faculdade';
import { SeusEstudosPageRoutingModule } from './seus-estudos-routing.module';
import { SeusEstudosPage } from './seus-estudos.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    SeusEstudosPageRoutingModule,
    HeaderModule,
    StepperModule,
  ],
  providers: [FaculdadeRepository],
  declarations: [SeusEstudosPage],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class SeusEstudosPageModule {}
