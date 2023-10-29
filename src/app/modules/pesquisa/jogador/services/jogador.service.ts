import { Injectable, OnDestroy } from "@angular/core";
import { JogadorModel } from "app/dominio/models/jogador.model";

import { BehaviorSubject, Observable, tap } from "rxjs";

import { PesquisaService } from "../../services/pesquisa.service";

@Injectable()
export class JogadorService implements OnDestroy {

    private _jogadorAtivo = new BehaviorSubject<boolean>(false);

    constructor(
        private _pesquisaService: PesquisaService
    ) { }

    public get jogadorAtivo$(): Observable<boolean> {
        return this._jogadorAtivo.asObservable();
    }

    init(): void {
        this._pesquisaService.atualizarTipoPesquisa('jogador');
    }

    ngOnDestroy(): void {

        this._pesquisaService.atualizarTipoPesquisa(null);
    }

    fecharDetalheJogador(): void {
        this._jogadorAtivo.next(false);
    }

    public buscarEstadio(jogadorId: string): Observable<JogadorModel> {

        return this._pesquisaService.buscarJogador(jogadorId)
            .pipe(
                tap(() => this._jogadorAtivo.next(true))
            );
    }
}