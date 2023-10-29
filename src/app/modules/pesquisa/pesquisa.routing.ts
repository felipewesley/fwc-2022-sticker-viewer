import { Routes } from "@angular/router";

import { TipoPesquisa } from "app/dominio/types/search.type";

import { PesquisaComponent } from "./pesquisa.component";

export const pesquisaRoutes: Routes = [

    {
        path: '',
        component: PesquisaComponent,
        children: [

            {
                path: <TipoPesquisa>'estadio',
                loadChildren: () => import('./estadio/estadio.module').then(m => m.EstadioModule)
            },
            {
                path: <TipoPesquisa>'jogador',
                loadChildren: () => import('./jogador/jogador.module').then(m => m.JogadorModule)
            },
            // {
            //     path: <TipoPesquisa>'pais',
            //     loadChildren: () => import('./pais/pais.module').then(m => m.PaisModule)
            // }

        ]
    }

]