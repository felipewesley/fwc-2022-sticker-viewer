import { Routes } from "@angular/router";

import { MainDetalheResolver } from "./resolvers/detalhe.resolver";

import { MainComponent } from "./main.component";

export const mainRouting: Routes = [

    {
        path: '',
        component: MainComponent,
        children: [

            {
                path: ':resourceType',
                loadChildren: () => import('./detalhe/detalhe.module').then(m => m.MainDetalheModule),
                resolve: {
                    resourceType: MainDetalheResolver
                }
            }

        ]
    }

];