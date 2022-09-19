import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { SharedModule } from '@shared/shared.module';
import { HeaderModule } from '../components/header/header.module';
import { StepperModule } from '../components/stepper/stepper.module';
import { RedesSociaisPageRoutingModule } from './redes-sociais-routing.module';
import { RedesSociaisPage } from './redes-sociais.page';

@NgModule({
  imports: [
    CommonModule,
    SharedModule,
    ReactiveFormsModule,
    IonicModule,
    RedesSociaisPageRoutingModule,
    HeaderModule,
    StepperModule,
  ],
  declarations: [RedesSociaisPage],
})
export class RedesSociaisPageModule {}
