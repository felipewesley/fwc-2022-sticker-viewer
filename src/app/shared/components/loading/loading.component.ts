import { Component, Input, OnInit } from "@angular/core";
import { ProgressSpinnerMode } from "@angular/material/progress-spinner";

import { SharedModule } from "app/shared/shared.module";

@Component({
    selector: 'loading',
    templateUrl: './loading.component.html',
    styleUrls: ['./loading.component.scss'],
    standalone: true,
    imports: [SharedModule]
})
export class LoadingComponent implements OnInit {

    @Input('color') public color: string = 'primary';
    
    public mode: ProgressSpinnerMode = 'indeterminate';

    constructor() { }

    ngOnInit(): void {
        
    }
}