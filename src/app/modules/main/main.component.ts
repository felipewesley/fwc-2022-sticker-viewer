import { Component, OnInit } from "@angular/core";
import { FormControl } from "@angular/forms";

import { TipoBuscaEnum } from "app/dominio/enums/tipo-busca.enum";

import { MainService } from "./services/main.service";

@Component({
    selector: 'app-main',
    templateUrl: './main.component.html',
    styleUrls: ['./main.component.scss'],
    providers: [MainService]
})
export class MainComponent implements OnInit {

    public tipoBusca = new FormControl<TipoBuscaEnum>(null);
    public buscaValor = new FormControl('');

    constructor() { }

    ngOnInit(): void {
        
    }

    buscar(): void {

        const tipo = this.tipoBusca.value;
        const valor = this.buscaValor.value;
    }
}