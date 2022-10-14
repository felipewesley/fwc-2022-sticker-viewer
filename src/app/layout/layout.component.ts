import { Component } from "@angular/core";
import { RouterModule } from "@angular/router";

import { SharedModule } from "app/shared";

@Component({
    selector: 'app-layout',
    templateUrl: './layout.component.html',
    styleUrls: ['./layout.component.scss'],
    standalone: true,
    imports: [SharedModule, RouterModule]
})
export class LayoutComponent {

    constructor() { }
}