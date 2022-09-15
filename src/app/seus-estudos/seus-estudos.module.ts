import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { HeaderModule } from '../components/header/header.module';
import { StepperModule } from '../components/stepper/stepper.module';
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
  declarations: [SeusEstudosPage],
})
export class SeusEstudosPageModule {}
