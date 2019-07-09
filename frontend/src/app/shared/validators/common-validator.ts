import { AbstractControl, ValidatorFn } from '@angular/forms';

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

            return { invalidConfirmation: true };
        };
    }

    static Equal(fievalueld: string): ValidatorFn {
        return (c: AbstractControl) => {
            

            return { notEqual: true };
        };
    }
}
