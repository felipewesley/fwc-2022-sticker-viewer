import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";

import { environment } from "environments/environment";

import { BehaviorSubject, delay, finalize, Observable, take } from "rxjs";

import { TipoPesquisa } from "app/dominio/types/search.type";
import { EstadioModel } from "app/dominio/models/estadio.model";
import { JogadorModel } from "app/dominio/models/jogador.model";

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

    /**
     * BUSCA ESTADIO
     */

    public buscarEstadio(estadioId: string): Observable<EstadioModel> {

        this._detalheLoading.next(true);

        return this._buscarEstadio(estadioId)
            .pipe(
                finalize(() => this._detalheLoading.next(false))
            );
    }

    private _buscarEstadio(estadioId: string): Observable<EstadioModel> {

        const url = environment.api.baseUrl + environment.api.estadio;

        return this._http.get<EstadioModel>(url + '/' + estadioId)
            .pipe(
                take(1),
                delay(2000)
            );
    }

    /**
     * BUSCA JOGADOR
     */

    public buscarJogador(jogadorId: string): Observable<JogadorModel> {

        this._detalheLoading.next(true);

        return this._buscarJogador(jogadorId)
            .pipe(
                finalize(() => this._detalheLoading.next(false))
            );
    }

    private _buscarJogador(jogadorId: string): Observable<JogadorModel> {

        const url = environment.api.baseUrl + environment.api.jogador;

        return this._http.get<JogadorModel>(url + '/' + jogadorId)
            .pipe(
                take(1),
                delay(2000)
            );
    }
}