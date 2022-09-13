import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SeusEstudosSecondPage } from './seus-estudos-second.page';

const routes: Routes = [
  {
    path: '',
    component: SeusEstudosSecondPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SeusEstudosSecondPageRoutingModule {}
