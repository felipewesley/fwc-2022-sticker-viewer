import { NgModule } from "@angular/core";
import { RouterModule } from "@angular/router";

import { SharedModule } from "app/shared";

import { estadioRouting as routes } from "./estadio.routing";
import { EstadioDetalheResolver } from "./detalhe/resolvers/detalhe.resolver";

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
    exports: [],
    providers: [
        EstadioDetalheResolver
    ]
})
export class EstadioModule { }