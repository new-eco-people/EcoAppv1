import { ErrorHandler, Inject } from '@angular/core';
import { FormGroup } from '@angular/forms';
import * as lodash from 'lodash';
import { ToasterService } from '../services/toaster/toaster.service';

export class AppErrorHandler implements ErrorHandler {

    constructor(@Inject(ToasterService) private toastService: ToasterService) {}

    handleError(error: string): void {
        this.toastService.error(error);
        console.log(error);
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
            console.log(errors);

            Object.keys(errors).forEach((props: string) => {
                reactiveForm.controls[props].setErrors( { message: errors[props][0], serverError: true  } );
            });
            return reactiveForm;
        }

        throw new Error('An error occurred, please try again later');
    }
}
