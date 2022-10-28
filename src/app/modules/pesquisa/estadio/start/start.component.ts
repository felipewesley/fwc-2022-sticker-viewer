import { Component, OnInit } from "@angular/core";
import { FormControl } from "@angular/forms";
import { ActivatedRoute, Router } from "@angular/router";

import { NotificacaoService } from "app/core/notificacao";

@Component({
    selector: 'app-estadio-start',
    templateUrl: './start.component.html',
    styleUrls: ['./start.component.scss']
})
export class EstadioStartComponent implements OnInit {

    public pesquisa = new FormControl('');

    public value = '';

    public preSelecaoOpcoes = [
        'FWC8',
        'FWC9',
        'FWC10',
        'FWC11',
        'FWC12',
        'FWC13',
        'FWC14',
        'FWC15',
        'FWC16',
        'FWC17',
    ];

    constructor(
        private _notificationService: NotificacaoService,
        private _router: Router,
        private _activatedRoute: ActivatedRoute
    ) { }

    ngOnInit(): void {
       
        this.pesquisa.valueChanges
            .subscribe(value => {

                this.value = value?.toUpperCase();
            });
    }

    public pesquisar(): void {

        const valor = this.pesquisa.value;

        if (!valor) {

            this._notificationService.erro(`Um código válido de estádio deve ser informado`);
            return;
        }

        this._notificationService.mensagem(`Carregando dados do estádio...`);

        this._router.navigate([valor], { relativeTo: this._activatedRoute });
    }

    public preSelecionar(valor: string): void {

        this.pesquisa.patchValue(valor?.toUpperCase());
    }
}