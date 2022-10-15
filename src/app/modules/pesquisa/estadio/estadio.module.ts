import { NgModule } from "@angular/core";
import { RouterModule } from "@angular/router";

import { SharedModule } from "app/shared";

import { estadioRouting as routes } from "./estadio.routing";

import { EstadioComponent } from "./estadio.component";

@NgModule({
    imports: [
        SharedModule,

        RouterModule.forChild(routes)
    ],
    declarations: [
        EstadioComponent
    ],
    exports: []
})
export class EstadioModule { }