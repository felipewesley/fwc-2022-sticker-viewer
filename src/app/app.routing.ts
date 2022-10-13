import { Routes } from "@angular/router";

import { LayoutComponent } from "./layout/layout.component";

export const appRouting: Routes = [

    {
        path: '',
        component: LayoutComponent,
        children: [

            {
                path: '',
                loadChildren: () => import('./modules/main/main.module').then(m => m.MainModule)
            }

        ]
    }

];