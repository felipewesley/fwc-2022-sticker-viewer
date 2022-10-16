import { NgModule } from "@angular/core";
import { RouterModule } from "@angular/router";

import { SharedModule } from "app/shared";
import { LoadingComponent } from "app/shared/components/loading/loading.component";
import { CustomIconComponent } from "app/shared/components/custom-icon/custom-icon.component";

import { pesquisaRoutes as routes } from "./pesquisa.routing";

import { PesquisaComponent } from "./pesquisa.component";
import { OpcaoPesquisaComponent } from "./components/opcao-pesquisa/opcao-pesquisa.component";

@NgModule({
    imports: [
        SharedModule,
        LoadingComponent,
        CustomIconComponent,
        
        RouterModule.forChild(routes)
    ],
    declarations: [
        PesquisaComponent,
        OpcaoPesquisaComponent
    ],
    exports: [],
    providers: []
})
export class PesquisaModule { }