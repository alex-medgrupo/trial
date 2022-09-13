import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'home',
    loadChildren: () => import('./home/home.module').then( m => m.HomePageModule)
  },
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  {
    path: 'dados-pessoais',
    loadChildren: () => import('./dados-pessoais/dados-pessoais.module').then( m => m.DadosPessoaisPageModule)
  },
  {
    path: 'redes-sociais',
    loadChildren: () => import('./redes-sociais/redes-sociais.module').then( m => m.RedesSociaisPageModule)
  },
  {
    path: 'seus-estudos',
    loadChildren: () => import('./seus-estudos/seus-estudos.module').then( m => m.SeusEstudosPageModule)
  },
  {
    path: 'conclusao',
    loadChildren: () => import('./conclusao/conclusao.module').then( m => m.ConclusaoPageModule)
  },
  {
    path: 'dados-pessoais-second',
    loadChildren: () => import('./dados-pessoais-second/dados-pessoais-second.module').then( m => m.DadosPessoaisSecondPageModule)
  },
  {
    path: 'seus-estudos-second',
    loadChildren: () => import('./seus-estudos-second/seus-estudos-second.module').then( m => m.SeusEstudosSecondPageModule)
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
