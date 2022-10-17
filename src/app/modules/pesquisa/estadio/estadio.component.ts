import { Component, OnDestroy, OnInit } from "@angular/core";

import { EstadioService } from "./services/estadio.service";

@Component({
    selector: 'app-estadio',
    templateUrl: './estadio.component.html',
    styleUrls: ['./estadio.component.scss'],
    providers: [EstadioService]
})
export class EstadioComponent implements OnInit, OnDestroy {

    public estadioAtivo$ = this._service.estadioAtivo$;

    constructor(
        private _service: EstadioService
    ) { }

    ngOnInit(): void {
        this._service.init();
    }

    ngOnDestroy(): void {
        this._service.destroy();
    }
}