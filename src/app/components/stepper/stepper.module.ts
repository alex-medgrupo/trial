import { CommonModule } from '@angular/common';
import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { IonicModule } from '@ionic/angular';
import { StepperComponent } from './stepper.component';

@NgModule({
  declarations: [StepperComponent],
  imports: [CommonModule, IonicModule],
  exports: [StepperComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class StepperModule {}
