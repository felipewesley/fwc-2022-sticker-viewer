import { Component, OnInit } from "@angular/core";

import { JogadorService } from "./services/jogador.service";

@Component({
    selector: 'app-jogador',
    templateUrl: './jogador.component.html',
    styleUrls: ['./jogador.component.scss'],
    providers: [JogadorService]
})
export class JogadorComponent implements OnInit {

    public jogadorAtivo$ = this._service.jogadorAtivo$;

    constructor(
        private _service: JogadorService
    ) { }

    ngOnInit(): void {
        this._service.init();
    }

}