import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { RedesSociaisPageRoutingModule } from './redes-sociais-routing.module';

import { RedesSociaisPage } from './redes-sociais.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RedesSociaisPageRoutingModule
  ],
  declarations: [RedesSociaisPage]
})
export class RedesSociaisPageModule {}
