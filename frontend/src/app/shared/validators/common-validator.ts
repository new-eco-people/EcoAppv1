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

    static ValidPassword(): ValidatorFn {
        return (c: AbstractControl) => {
            const pattern  = new RegExp('^(?=.*[a-z])(?=.*[A-Z])(?=.*\\d)(?=.*[@$!%*?&_#£~|])[A-Za-z\\d@$!%*?&_#£~|]{5,}$');

            const result = pattern.test(c.value);

            if (result) {
                return null
            }

            return {invalidPassword: true, message: `Min 5 chars with one lowercase, uppercase, special char and number`}

        };
    }
}
