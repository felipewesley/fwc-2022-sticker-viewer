import { NgModule } from "@angular/core";
import { RouterModule } from "@angular/router";

import { SharedModule } from "app/shared";

import { jogadorRouting as routes } from "./jogador.routing";

import { JogadorComponent } from "./jogador.component";

@NgModule({
    imports: [
        SharedModule,

        RouterModule.forChild(routes)
    ],
    declarations: [
        JogadorComponent
    ],
    exports: []
})
export class JogadorModule { }