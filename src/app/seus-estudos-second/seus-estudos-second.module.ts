import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { SeusEstudosSecondPageRoutingModule } from './seus-estudos-second-routing.module';

import { SeusEstudosSecondPage } from './seus-estudos-second.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    SeusEstudosSecondPageRoutingModule
  ],
  declarations: [SeusEstudosSecondPage]
})
export class SeusEstudosSecondPageModule {}
