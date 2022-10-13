import { Injectable } from "@angular/core";
import { MatSnackBar, MatSnackBarConfig } from "@angular/material/snack-bar";

import { Observable, map } from "rxjs";

/**
 * @class Notificacao service
 */
@Injectable({
    providedIn: 'root'
})
export class NotificacaoService {

    private _config = {
        snackBar: {
            horizontalPosition: 'center',
            verticalPosition: 'bottom',
            duration: 5000
        } as MatSnackBarConfig,
        // actionText: 'Ok'
        actionText: '\u2715', // HTML code => 'x' (close)
    };

    constructor(
        private snackBar: MatSnackBar
    ) { }

    // ----------------------------------------------------------------------------------------------------
    // @ Public methods
    // ----------------------------------------------------------------------------------------------------

    public mensagem(mensagem: string): Observable<boolean> {

        const snackbarRef = this.snackBar.open(mensagem, this._config.actionText, { ...this._config.snackBar });

        return snackbarRef.onAction()
            .pipe(
                map(() => true)
            );
    }

    public erro(message: string): Observable<boolean> {

        const snackbarRef = this.snackBar.open(message, this._config.actionText, { ...this._config.snackBar });

        return snackbarRef.onAction()
            .pipe(
                map(() => true)
            );
    }
}