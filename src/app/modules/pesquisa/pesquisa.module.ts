import { NgModule } from "@angular/core";
import { RouterModule } from "@angular/router";

import { SharedModule } from "app/shared";
import { LoadingComponent } from "app/shared/components/loading/loading.component";

import { pesquisaRoutes as routes } from "./pesquisa.routing";

import { PesquisaComponent } from "./pesquisa.component";

@NgModule({
    imports: [
        SharedModule,
        LoadingComponent,

        RouterModule.forChild(routes)
    ],
    declarations: [
        PesquisaComponent
    ],
    exports: [],
    providers: []
})
export class PesquisaModule { }