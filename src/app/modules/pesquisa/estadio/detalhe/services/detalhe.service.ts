import { Injectable } from "@angular/core";

import { Observable } from "rxjs";

import { EstadioService } from "../../services/estadio.service";
import { EstadioDetalheResolver } from "../resolvers/detalhe.resolver";

@Injectable()
export class EstadioDetalheService {

    constructor(
        private _estadioService: EstadioService,
        private _detalheResolver: EstadioDetalheResolver
    ) { }

    public get estadioId$(): Observable<string> {
        return this._detalheResolver.estadioId$;
    }

    public buscarEstadio(estadioId: string): Observable<any> {

        return this._estadioService.buscarEstadio(estadioId);
    }

    onDestroy() {
        this._estadioService.fecharDetalheEstadio();
    }
}