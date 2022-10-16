import { Injectable } from "@angular/core";
import { FormBuilder } from "@angular/forms";

@Injectable()
export class PesquisaFormService {

    private _form = this._createForm();

    constructor(
        private _fb: FormBuilder
    ) { }

    public get form() {
        return this._form;
    }

    private _createForm() {

        const form = this._fb.group({

        });

        return form;
    }
}