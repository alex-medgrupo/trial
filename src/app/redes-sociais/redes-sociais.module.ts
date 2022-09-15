import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { HeaderModule } from '../components/header/header.module';
import { StepperModule } from '../components/stepper/stepper.module';
import { RedesSociaisPageRoutingModule } from './redes-sociais-routing.module';
import { RedesSociaisPage } from './redes-sociais.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RedesSociaisPageRoutingModule,
    HeaderModule,
    StepperModule,
  ],
  declarations: [RedesSociaisPage],
})
export class RedesSociaisPageModule {}
