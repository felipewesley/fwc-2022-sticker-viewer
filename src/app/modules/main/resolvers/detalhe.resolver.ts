import { Injectable } from "@angular/core";
import { ActivatedRouteSnapshot, Resolve, RouterStateSnapshot } from "@angular/router";

import { Observable } from "rxjs";

@Injectable()
export class MainDetalheResolver implements Resolve<void> {

    constructor() { }

    resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): void | Observable<void> {
        
    }
}