import { Injectable } from "@angular/core";

import { PesquisaService } from "../../services/pesquisa.service";

@Injectable()
export class EstadioService {

    constructor(
        private _pesquisaService: PesquisaService
    ) { }

    init(): void {
        this._pesquisaService.atualizarTipoPesquisa('estadio');
    }

    destroy(): void {
        this._pesquisaService.atualizarTipoPesquisa(null);
    }
}