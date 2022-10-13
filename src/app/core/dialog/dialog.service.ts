import { Injectable } from "@angular/core";
import { MatDialog, MatDialogConfig } from "@angular/material/dialog";

import { Observable, map } from "rxjs";

import { ConfirmacaoDialogComponent, ConfirmacaoDialogInput } from "./components/confirmacao/confirmacao.component";

/**
 * @class Dialog service
 */
@Injectable({
    providedIn: 'root'
})
export class DialogService {

    constructor(
        private _matDialog: MatDialog
    ) { }

    public confirmacao(mensagem: string): Observable<boolean> {

        const config: MatDialogConfig<any> = {

        };

        const data: ConfirmacaoDialogInput = {
            mensagem: mensagem,
            actions: {
                confirm: {
                    show: true,
                    label: 'Confirmar'
                },
                cancel: {
                    show: true,
                    label: 'Cancelar'
                }
            }
        };

        return this._matDialog.open(ConfirmacaoDialogComponent, { ...config, data })
            .afterClosed()
            .pipe(
                map(res => <boolean>!!res)
            );
    }

}