import { Component, Inject, OnInit } from "@angular/core";
import { MatDialogRef, MAT_DIALOG_DATA } from "@angular/material/dialog";

import { SharedModule } from "app/shared";

/**
 * ### Confirmation Dialog Payload
 *
 * @type
 */
export type ConfirmacaoDialogInput = {

    mensagem: string;
    actions: {
        confirm: {
            label: string;
            show: boolean;
        };
        cancel: {
            label: string;
            show: boolean;
        };
    };

}

/**
 * @class ConfirmacaoDialogComponent
 */
@Component({
    selector: 'app-confirmacao-dialog',
    templateUrl: './confirmacao.component.html',
    styleUrls: [],
    standalone: true,
    imports: [SharedModule]
})
export class ConfirmacaoDialogComponent implements OnInit {

    public mensagem: string;

    public confirmarAction: ConfirmacaoDialogInput['actions']['confirm'];
    public cancelarAction: ConfirmacaoDialogInput['actions']['cancel'];

    /**
     * Confirmation dialog component
     * @param _data
     */
    constructor(
        @Inject(MAT_DIALOG_DATA) private _data: ConfirmacaoDialogInput,
        private _matDialogRef: MatDialogRef<ConfirmacaoDialogComponent>
    ) { }

    // ----------------------------------------------------------------------------------------------------
    // @ Lifecycle hooks
    // ----------------------------------------------------------------------------------------------------

    ngOnInit(): void {

        if (!this._data)
            return;

        this.mensagem = this._data.mensagem;
        this.confirmarAction = this._data.actions.confirm;
        this.cancelarAction = this._data.actions.cancel;
    }

    // ----------------------------------------------------------------------------------------------------
    // @ Public methods
    // ----------------------------------------------------------------------------------------------------

    public onConfirmar(): void {

        this._matDialogRef.close(true);
    }

    public onCancelar(): void {

        this._matDialogRef.close(false);
    }
}