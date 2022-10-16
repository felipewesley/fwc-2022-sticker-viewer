import { Component, Input } from "@angular/core";

import { SharedModule } from "app/shared/shared.module";

@Component({
    selector: 'custom-icon',
    templateUrl: './custom-icon.component.html',
    styleUrls: ['./custom-icon.component.scss'],
    standalone: true,
    imports: [SharedModule]
})
export class CustomIconComponent {

    @Input('icon') public icon: string;
    @Input('color') public color: string = 'basic';

    @Input('appearence') public appearence: 'default' | 'rounded' = 'rounded';

    constructor() { }
}