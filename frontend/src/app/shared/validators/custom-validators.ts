import { AbstractControl, ValidatorFn, Validators } from '@angular/forms';

export class CustomValidator {


    static CustomRequired(visibleFieldName: string): ValidatorFn {
        return (c: AbstractControl) => {
            const result  = Validators.required(c);

            if (!result) {
                return null
            }

            return {...result, message: `${visibleFieldName} is required`}
        };
    }

    static CustomRequiredTrue(visibleFieldName: string): ValidatorFn {
        return (c: AbstractControl) => {
            const result  = Validators.requiredTrue(c);

            if (!result) {
                return null
            }

            return {...result, message: `${visibleFieldName} must be selected`}
        };
    }

    static CustomEmail(): ValidatorFn {
        return (c: AbstractControl) => {
            const result  = Validators.email(c);

            if (!result) {
                return null
            }

            return {...result, message: `Email is invalid`}
        };
    }
}
