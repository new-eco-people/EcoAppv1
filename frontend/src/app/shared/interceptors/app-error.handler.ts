import { ErrorHandler, Inject } from '@angular/core';
import { FormGroup } from '@angular/forms';
import * as lodash from 'lodash';

export class AppErrorHandler implements ErrorHandler {

    constructor() { }

    handleError(error: string): void {
        console.log(error);
        // const result = error.replace(new RegExp('%n%', 'g'), '\n');
        // console.log(error);
    }

}

export interface ServerError {
    error: string;
    errors: {};
    stackTrace: string[];
}

export class AppErrors {
    static setError(error: ServerError, reactiveForm: FormGroup) {
        if (error.error) {
            throw new Error(error.error);

        } else if (!lodash.isEmpty(error.errors)) {

            const errors = new Object(error.errors);

            Object.keys(errors).forEach((props: string) => {
                reactiveForm.controls[props].setErrors( { [props]: { error: errors[props][0] } } );
            });
            return reactiveForm;
        }
    }
}
