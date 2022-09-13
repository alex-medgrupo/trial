import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DadosPessoaisSecondPage } from './dados-pessoais-second.page';

const routes: Routes = [
  {
    path: '',
    component: DadosPessoaisSecondPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DadosPessoaisSecondPageRoutingModule {}
