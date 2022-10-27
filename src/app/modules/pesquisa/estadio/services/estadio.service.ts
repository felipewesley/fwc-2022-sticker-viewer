import { Injectable } from "@angular/core";
import { EstadioModel } from "app/dominio/models/estadio.model";

import { BehaviorSubject, Observable, tap } from "rxjs";

import { PesquisaService } from "../../services/pesquisa.service";

@Injectable()
export class EstadioService {

    private _estadioAtivo = new BehaviorSubject<boolean>(false);

    constructor(
        private _pesquisaService: PesquisaService
    ) { }

    public get estadioAtivo$(): Observable<boolean> {
        return this._estadioAtivo.asObservable();
    }

    init(): void {
        this._pesquisaService.atualizarTipoPesquisa('estadio');
    }

    destroy(): void {
        this._pesquisaService.atualizarTipoPesquisa(null);
    }

    fecharDetalheEstadio(): void {
        this._estadioAtivo.next(false);
    }

    public buscarEstadio(estadioId: string): Observable<EstadioModel> {

        return this._pesquisaService.buscarEstadio(estadioId)
            .pipe(
                tap(() => this._estadioAtivo.next(true))
            );
    }
}