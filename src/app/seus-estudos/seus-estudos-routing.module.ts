import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SeusEstudosPage } from './seus-estudos.page';

const routes: Routes = [
  {
    path: '',
    component: SeusEstudosPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SeusEstudosPageRoutingModule {}
