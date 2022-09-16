import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ConfirmaDadosPage } from './confirma-dados.page';

const routes: Routes = [
  {
    path: '',
    component: ConfirmaDadosPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ConfirmaDadosPageRoutingModule {}
