import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { HeaderModule } from '../components/header/header.module';
import { StepperModule } from '../components/stepper/stepper.module';
import { ConclusaoPageRoutingModule } from './conclusao-routing.module';
import { ConclusaoPage } from './conclusao.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ConclusaoPageRoutingModule,
    HeaderModule,
    StepperModule,
  ],
  declarations: [ConclusaoPage],
})
export class ConclusaoPageModule {}
