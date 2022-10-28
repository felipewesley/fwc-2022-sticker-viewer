import { Component } from "@angular/core";
import { RouterModule } from "@angular/router";
import { DialogService } from "app/core/dialog";

import { SharedModule } from "app/shared";

import { FelipeBasso } from "./components/felipe-basso/felipe-basso.component";

@Component({
    selector: 'app-layout',
    templateUrl: './layout.component.html',
    styleUrls: ['./layout.component.scss'],
    standalone: true,
    imports: [SharedModule, RouterModule, FelipeBasso]
})
export class LayoutComponent {

    constructor(
        private _dialog: DialogService
    ) { }

    public owner(): void {

        this._dialog.open(FelipeBasso);
    }
}