import { Component, OnInit } from "@angular/core";
import { FormControl } from "@angular/forms";
import { ActivatedRoute, Router } from "@angular/router";

import { NotificacaoService } from "app/core/notificacao";

import { EstadioService } from "../services/estadio.service";

@Component({
    selector: 'app-estadio-start',
    templateUrl: './start.component.html',
    styleUrls: ['./start.component.scss']
})
export class EstadioStartComponent implements OnInit {

    public pesquisa = new FormControl('');

    constructor(
        private _service: EstadioService,
        private _notificationService: NotificacaoService,
        private _router: Router,
        private _activatedRoute: ActivatedRoute
    ) { }

    ngOnInit(): void {
        
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
}