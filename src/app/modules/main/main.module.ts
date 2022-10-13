import { NgModule } from "@angular/core";
import { RouterModule } from "@angular/router";

import { mainRouting as routes } from "./main.routing";

import { MainComponent } from "./main.component";

@NgModule({
    imports: [
        RouterModule.forChild(routes)
    ],
    declarations: [
        MainComponent
    ],
    exports: []
})
export class MainModule { }