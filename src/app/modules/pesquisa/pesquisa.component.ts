import { ChangeDetectorRef, Component, OnDestroy, OnInit, ViewChild } from "@angular/core";
import { ActivatedRoute, Router } from "@angular/router";
import { MatDrawer } from "@angular/material/sidenav";

import { Observable, Subject, takeUntil } from "rxjs";

import { NotificacaoService } from "app/core/notificacao";

import { TipoPesquisa } from "app/dominio/types/search.type";

import { PesquisaService } from "./services/pesquisa.service";
import { PesquisaFormService } from "./services/pesquisa.form.service";

@Component({
    selector: 'app-pesquisa',
    templateUrl: './pesquisa.component.html',
    styleUrls: ['./pesquisa.component.scss'],
    providers: [PesquisaService, PesquisaFormService]
})
export class PesquisaComponent implements OnInit, OnDestroy {

    public principalLoading$: Observable<boolean>;
    public detalheLoading$: Observable<boolean>;

    public tipoPesquisaAtivo: TipoPesquisa;

    @ViewChild('drawer', { static: true }) private _drawer: MatDrawer;

    private _unsubscribeAll = new Subject<void>();

    constructor(
        private _router: Router,
        private _activatedRoute: ActivatedRoute,
        private _notificacao: NotificacaoService,
        private _service: PesquisaService,
        private _changeDetectorRef: ChangeDetectorRef
    ) { }

    ngOnInit(): void {

        // Loadings
        this.principalLoading$ = this._service.loading.principal$;
        this.detalheLoading$ = this._service.loading.detalhe$;

        this._service.tipoPesquisaSelecionado$
            .pipe(
                takeUntil(this._unsubscribeAll)
            )
            .subscribe(tipo => {

                this.tipoPesquisaAtivo = tipo;

                if (tipo == null) {
                    this._drawer.close();
                    return;
                }

                this._drawer.open();

                this._changeDetectorRef.detectChanges();
            });
    }

    ngOnDestroy(): void {
        
        this._unsubscribeAll.next();
        this._unsubscribeAll.complete();
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