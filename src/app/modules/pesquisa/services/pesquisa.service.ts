import { Injectable } from "@angular/core";

import { BehaviorSubject, Observable } from "rxjs";

import { TipoPesquisa } from "app/dominio/types/search.type";

@Injectable()
export class PesquisaService {

    private _tipoPesquisaSelecionado = new BehaviorSubject<TipoPesquisa>(null);

    private _principalLoading = new BehaviorSubject<boolean>(false);
    private _detalheLoading = new BehaviorSubject<boolean>(false);

    constructor() { }

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
}