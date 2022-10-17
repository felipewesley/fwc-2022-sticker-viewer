import { Component, OnDestroy, OnInit } from "@angular/core";
import { ActivatedRoute, Router } from "@angular/router";
import { NotificacaoService } from "app/core/notificacao";

import { catchError, switchMap } from "rxjs";

import { EstadioDetalheService } from "./services/detalhe.service";

@Component({
    selector: 'app-estadio-detalhe',
    templateUrl: './detalhe.component.html',
    styleUrls: ['./detalhe.component.scss'],
    providers: [EstadioDetalheService]
})
export class EstadioDetalheComponent implements OnInit, OnDestroy {

    constructor(
        private _service: EstadioDetalheService,
        private _notificationService: NotificacaoService,
        private _router: Router,
        private _activatedRoute: ActivatedRoute
    ) { }

    ngOnInit(): void {
        
        this._service.estadioId$
            .pipe(
                switchMap(estadioId => this._service.buscarEstadio(estadioId)),
                catchError(err => {
                    this._notificationService.erro(err.error.message);
                    this._router.navigate(['..'], { relativeTo: this._activatedRoute });
                    throw err;
                })
            )
            .subscribe(estadio => {

                console.log('estadio =>', estadio);
            });
    }

    ngOnDestroy(): void {
        
        this._service.onDestroy();
    }
}