import { Routes } from "@angular/router";

import { PesquisaComponent } from "./pesquisa.component";

export const pesquisaRoutes: Routes = [

    {
        path: '',
        component: PesquisaComponent,
        children: []
    }

]