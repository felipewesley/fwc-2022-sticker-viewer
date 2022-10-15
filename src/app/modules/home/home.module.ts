import { NgModule } from "@angular/core";
import { RouterModule } from "@angular/router";

import { homeRoutes as routes } from "./home.routing";

import { SharedModule } from "app/shared";

import { HomeComponent } from "./home.component";

@NgModule({
    imports: [
        SharedModule,

        RouterModule.forChild(routes)
    ],
    declarations: [
        HomeComponent
    ],
    exports: []
})
export class HomeModule { }