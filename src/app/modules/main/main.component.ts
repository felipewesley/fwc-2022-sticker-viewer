import { Component, OnInit, ViewChild } from "@angular/core";
import { FormControl, FormGroup } from "@angular/forms";
import { MatDrawer } from "@angular/material/sidenav";

import { TipoBuscaEnum } from "app/dominio/enums/tipo-busca.enum";

import { MainService } from "./services/main.service";

@Component({
    selector: 'app-main',
    templateUrl: './main.component.html',
    styleUrls: ['./main.component.scss'],
    providers: [MainService]
})
export class MainComponent implements OnInit {

    public busca = new FormGroup({

        tipo: new FormControl<TipoBuscaEnum>(null),
        valor: new FormControl('')

    });

    @ViewChild('drawer', { static: true }) public drawer: MatDrawer;

    constructor() { }

    ngOnInit(): void {
        
    }

    buscar(): void {
        
    }
}