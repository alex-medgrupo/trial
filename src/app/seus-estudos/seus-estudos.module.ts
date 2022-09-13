import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { SeusEstudosPageRoutingModule } from './seus-estudos-routing.module';

import { SeusEstudosPage } from './seus-estudos.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    SeusEstudosPageRoutingModule
  ],
  declarations: [SeusEstudosPage]
})
export class SeusEstudosPageModule {}
