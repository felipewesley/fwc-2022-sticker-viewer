import { NgModule } from "@angular/core";
import { RouterModule } from "@angular/router";

import { SharedModule } from "app/shared";

import { estadioRouting as routes } from "./estadio.routing";

import { EstadioComponent } from "./estadio.component";
import { EstadioStartComponent } from "./start/start.component";
import { EstadioDetalheComponent } from "./detalhe/detalhe.component";

@NgModule({
    imports: [
        SharedModule,

        RouterModule.forChild(routes)
    ],
    declarations: [
        EstadioComponent,
        EstadioStartComponent,
        EstadioDetalheComponent
    ],
    exports: []
})
export class EstadioModule { }