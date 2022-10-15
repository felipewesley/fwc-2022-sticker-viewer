import { Component, OnInit } from "@angular/core";

import { EstadioDetalheService } from "./services/detalhe.service";

@Component({
    selector: 'app-estadio-detalhe',
    templateUrl: './detalhe.component.html',
    styleUrls: ['./detalhe.component.scss'],
    providers: [EstadioDetalheService]
})
export class EstadioDetalheComponent implements OnInit {

    constructor() { }

    ngOnInit(): void {
        
    }
}