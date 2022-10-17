import { Component, EventEmitter, Input, OnInit, Output } from "@angular/core";

import { NotificacaoService } from "app/core/notificacao";

@Component({
    selector: 'app-opcao-pesquisa',
    templateUrl: './opcao-pesquisa.component.html',
    styleUrls: ['./opcao-pesquisa.component.scss']
})
export class OpcaoPesquisaComponent implements OnInit {

    @Input('icon') public icon: string;
    @Input('title') public title: string;
    @Input('active') public active: boolean;
    @Input('disabled') public disabled: boolean = false;

    @Output('onClicked') public onClicked = new EventEmitter<void>();

    constructor(
        private _notificacao: NotificacaoService
    ) { }

    ngOnInit(): void {
        
    }

    click() {

        if (this.disabled) {

            this._notificacao.erro(`Opção não disponível`);
            return;
        }
            
        this.onClicked.emit();
    }
}