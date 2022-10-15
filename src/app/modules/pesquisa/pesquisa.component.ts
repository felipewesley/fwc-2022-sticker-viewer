import { Component, OnInit } from "@angular/core";

@Component({
    selector: 'app-pesquisa',
    templateUrl: './pesquisa.component.html',
    styleUrls: ['./pesquisa.component.scss']
})
export class PesquisaComponent implements OnInit {

    public loading = true;

    constructor() { }

    ngOnInit(): void {
        
        // setTimeout(() => this.loading = false, 5000);
    }
}