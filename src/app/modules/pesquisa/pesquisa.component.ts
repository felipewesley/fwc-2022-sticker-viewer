import { Component, OnInit, ViewChild } from "@angular/core";
import { ActivatedRoute, Router } from "@angular/router";
import { MatDrawer } from "@angular/material/sidenav";

import { NotificacaoService } from "app/core/notificacao";

import { PesquisaService } from "./services/pesquisa.service";
import { PesquisaFormService } from "./services/pesquisa.form.service";
import { TipoPesquisa } from "app/dominio/types/search.type";

@Component({
    selector: 'app-pesquisa',
    templateUrl: './pesquisa.component.html',
    styleUrls: ['./pesquisa.component.scss'],
    providers: [PesquisaService, PesquisaFormService]
})
export class PesquisaComponent implements OnInit {

    public loading = true;

    @ViewChild('drawer', { static: true }) private _drawer: MatDrawer;

    constructor(
        private _router: Router,
        private _activatedRoute: ActivatedRoute,
        private _notificacao: NotificacaoService
    ) { }

    ngOnInit(): void {
        
    }

    public pesquisar(destino: TipoPesquisa): void {

        const target: TipoPesquisa[] = [];

        switch (destino) {

            case 'pais':
                target.push('pais');
                break;
            case 'estadio':
                target.push('estadio');
                break;
            case 'jogador':
                target.push('jogador');
                break;
        }

        const url = target.pop();

        if (!url) {

            this._notificacao.erro(`Tipo de pesquisa inválido`);
            return;
        }

        this._router.navigate([url], { relativeTo: this._activatedRoute });
        return;
    }
}