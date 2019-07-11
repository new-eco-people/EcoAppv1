import { AbstractControl, ValidatorFn, Validators } from '@angular/forms';

export class CommonValidator {


    static confirmation(field: string): ValidatorFn {
        return (c: AbstractControl) => {
            const parent = c.parent;
            if (!parent) {
                return null;
            }

            const originalField = parent.get(field).value ?  parent.get(field).value : null;
            if (originalField === c.value) {
                return null;
            }

            return { invalidConfirmation: true, message: `field must match ${field}` };
        };
    }

    static CustomRequired(visibleFieldName: string): ValidatorFn {
        return (c: AbstractControl) => {
            const result  = Validators.required(c);

            if (!result) {
                return null
            }

            const v = {...result, message: `${visibleFieldName} is required`}

            console.log(v);

            return { notEqual: true };
        };
    }
}
