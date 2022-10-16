import { Component, EventEmitter, Input, OnInit, Output } from "@angular/core";

@Component({
    selector: 'app-opcao-pesquisa',
    templateUrl: './opcao-pesquisa.component.html',
    styleUrls: ['./opcao-pesquisa.component.scss']
})
export class OpcaoPesquisaComponent implements OnInit {

    @Input('icon') public icon: string;
    @Input('title') public title: string;
    @Input('active') public active: boolean;

    @Output('onClicked') public onClicked = new EventEmitter<void>();

    constructor() { }

    ngOnInit(): void {
        
    }
}