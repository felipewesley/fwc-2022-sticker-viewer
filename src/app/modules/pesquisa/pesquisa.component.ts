import { Component, OnInit } from "@angular/core";

import { PesquisaService } from "./services/pesquisa.service";
import { PesquisaFormService } from "./services/pesquisa.form.service";

@Component({
    selector: 'app-pesquisa',
    templateUrl: './pesquisa.component.html',
    styleUrls: ['./pesquisa.component.scss'],
    providers: [PesquisaService,
    PesquisaFormService]
})
export class PesquisaComponent implements OnInit {

    public loading = true;

    constructor() { }

    ngOnInit(): void {
        
        // setTimeout(() => this.loading = false, 5000);
    }
}