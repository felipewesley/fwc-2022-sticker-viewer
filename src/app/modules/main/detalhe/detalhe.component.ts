import { Component, OnInit } from "@angular/core";

import { MainDetalheService } from "./services/detalhe.service";

@Component({
    selector: 'app-detalhe',
    templateUrl: './detalhe.component.html',
    styleUrls: ['./detalhe.component.scss'],
    providers: [MainDetalheService]
})
export class MainDetalheComponent implements OnInit {

    constructor() { }

    ngOnInit(): void {
        
    }
}