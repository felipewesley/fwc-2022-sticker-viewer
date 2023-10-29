import { Routes } from "@angular/router";

import { LayoutComponent } from "./layout/layout.component";

export const appRouting: Routes = [

  {
    path: '',
    pathMatch: 'full',
    redirectTo: 'home'
  },
  {
    path: 'redirect-to-pesquisa',
    pathMatch: 'full',
    redirectTo: 'pesquisa'
  },

  {
    path: '',
    component: LayoutComponent,
    children: [

      {
        path: 'home',
        loadChildren: () => import('./modules/home/home.module').then(m => m.HomeModule)
      },
      {
        path: 'pesquisa',
        loadChildren: () => import('./modules/pesquisa/pesquisa.module').then(m => m.PesquisaModule)
      }

    ]
  }

];
