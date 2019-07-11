import { FormGroup } from '@angular/forms';

export class ErrorMessage {

    static reactiveFormError(form: FormGroup, fieldName: string) {

        return `
            <mat-error>
                <small>${fieldName}</small>
            </mat-error>
        `

    }
}
