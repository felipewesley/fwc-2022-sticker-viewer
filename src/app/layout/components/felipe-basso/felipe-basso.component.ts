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

    public github = 'https://www.github.com/felipewesley';
    public linkedin = 'https://www.linkedin.com/in/felipe-wesley';

    constructor() { }

    ngOnInit(): void {
        
    }

    openGithub(): void {

        window.open(this.github, '_blank');
    }

    openLinkedin(): void {

        window.open(this.linkedin, '_blank');
    }
}