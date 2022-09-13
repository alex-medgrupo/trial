import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { DadosPessoaisSecondPageRoutingModule } from './dados-pessoais-second-routing.module';

import { DadosPessoaisSecondPage } from './dados-pessoais-second.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    DadosPessoaisSecondPageRoutingModule
  ],
  declarations: [DadosPessoaisSecondPage]
})
export class DadosPessoaisSecondPageModule {}
