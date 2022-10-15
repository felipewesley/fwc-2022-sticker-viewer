import { Routes } from "@angular/router";

import { EstadioComponent } from "./estadio.component";
import { EstadioStartComponent } from "./start/start.component";
import { EstadioDetalheComponent } from "./detalhe/detalhe.component";

export const estadioRouting: Routes = [
    
    {
        path: '',
        component: EstadioComponent,
        children: [

            {
                path: '',
                component: EstadioStartComponent
            },
            {
                path: ':estadioId',
                component: EstadioDetalheComponent
            }

        ]
    }

]