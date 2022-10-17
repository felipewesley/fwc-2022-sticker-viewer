import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";

import { environment } from "environments/environment";

import { BehaviorSubject, delay, finalize, Observable, take } from "rxjs";

import { TipoPesquisa } from "app/dominio/types/search.type";

@Injectable()
export class PesquisaService {

    private _tipoPesquisaSelecionado = new BehaviorSubject<TipoPesquisa>(null);

    private _principalLoading = new BehaviorSubject<boolean>(false);
    private _detalheLoading = new BehaviorSubject<boolean>(false);

    constructor(
        private _http: HttpClient
    ) { }

    public get loading() {

        return {
            principal$: this._principalLoading.asObservable(),
            detalhe$: this._detalheLoading.asObservable()
        };
    }

    public get tipoPesquisaSelecionado$(): Observable<TipoPesquisa> {
        return this._tipoPesquisaSelecionado.asObservable();
    }

    public atualizarTipoPesquisa(tipoPesquisa: TipoPesquisa): void {

        this._tipoPesquisaSelecionado.next(tipoPesquisa);
    }

    public buscarEstadio(estadioId: string): Observable<any> {

        this._detalheLoading.next(true);

        return this._buscarEstadio(estadioId)
            .pipe(
                finalize(() => this._detalheLoading.next(false))
            );
    }

    private _buscarEstadio(estadioId: string): Observable<any> {

        const url = environment.api.baseUrl + environment.api.estadio;

        return this._http.get<any>(url + '/' + estadioId)
            .pipe(
                take(1),
                delay(2000)
            );
    }
}