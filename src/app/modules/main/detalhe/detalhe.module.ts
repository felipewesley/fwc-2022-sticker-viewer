import { NgModule } from "@angular/core";
import { RouterModule } from "@angular/router";

import { SharedModule } from "app/shared";

import { detalheRouting as routes } from "./detalhe.routing";

import { MainDetalheComponent } from "./detalhe.component";

@NgModule({
    imports: [
        SharedModule,
        RouterModule.forChild(routes)
    ],
    declarations: [
        MainDetalheComponent
    ],
    exports: []
})
export class MainDetalheModule { }