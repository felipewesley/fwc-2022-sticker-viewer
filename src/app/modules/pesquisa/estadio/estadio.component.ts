import { Component, OnInit } from "@angular/core";

import { EstadioService } from "./services/estadio.service";

@Component({
    selector: 'app-estadio',
    templateUrl: './estadio.component.html',
    styleUrls: ['./estadio.component.scss'],
    providers: [EstadioService]
})
export class EstadioComponent implements OnInit {

    constructor() { }

    ngOnInit(): void {
        
    }
}