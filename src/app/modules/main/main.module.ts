import { NgModule } from "@angular/core";
import { RouterModule } from "@angular/router";

import { SharedModule } from "app/shared";

import { mainRouting as routes } from "./main.routing";

import { MainDetalheResolver } from "./resolvers/detalhe.resolver";

import { MainComponent } from "./main.component";

@NgModule({
    imports: [
        SharedModule,
        RouterModule.forChild(routes)
    ],
    declarations: [
        MainComponent
    ],
    exports: [],
    providers: [MainDetalheResolver]
})
export class MainModule { }