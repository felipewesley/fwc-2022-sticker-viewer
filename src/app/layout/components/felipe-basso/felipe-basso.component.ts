import { Component, OnInit } from "@angular/core";
import { SharedModule } from "app/shared";

@Component({
    selector: 'app-felipe-basso',
    templateUrl: './felipe-basso.component.html',
    styleUrls: ['./felipe-basso.component.scss'],
    standalone: true,
    imports: [SharedModule],
})
export class FelipeBasso implements OnInit {

    constructor() { }

    ngOnInit(): void {
        
    }
}