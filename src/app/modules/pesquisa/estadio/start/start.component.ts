import { Component, OnInit } from "@angular/core";
import { FormControl } from "@angular/forms";

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
        private _notificationService: NotificacaoService
    ) { }

    ngOnInit(): void {
        
    }

    public pesquisar(): void {

        const valor = this.pesquisa.value;

        if (!valor) {

            this._notificationService.erro(`Um código válido de estádio deve ser informado`);
            return;
        }
    }
}