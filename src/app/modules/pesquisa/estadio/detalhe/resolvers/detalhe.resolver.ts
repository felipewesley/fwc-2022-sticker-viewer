import { Injectable } from "@angular/core";
import { ActivatedRouteSnapshot, Resolve, RouterStateSnapshot } from "@angular/router";

import { BehaviorSubject, Observable } from "rxjs";

@Injectable()
export class EstadioDetalheResolver implements Resolve<void> {

    private _estadio = new BehaviorSubject<string>(null);

    constructor() { }

    public get estadioId$(): Observable<string> {
        return this._estadio.asObservable();
    }

    resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): void | Observable<void> {
        
        const estadioId = route.paramMap.get('estadioId');

        if (estadioId) {

            this._estadio.next(estadioId);
        }

        return;
    }
}