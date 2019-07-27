import { Injectable } from '@angular/core';
import { ToasterService } from '../toaster/toaster.service';
import { FormGroup } from '@angular/forms';
import * as lodash from 'lodash';
import { ServerError } from 'app/shared/interceptors/form-error-handler';

@Injectable({
  providedIn: 'root'
})
export class FormErrorService {

  constructor(private toast: ToasterService) { }


  setError(error: ServerError, reactiveForm: FormGroup) {
    if (error.error) {
        this.toast.error(error.error);
        return;

    } else if (!lodash.isEmpty(error.errors)) {

        const errors = new Object(error.errors);
        console.log(errors);

        Object.keys(errors).forEach((props: string) => {
            reactiveForm.controls[props].setErrors( { message: errors[props][0], serverError: true  } );
        });
        return reactiveForm;
    }

    this.toast.error('An error occurred, please try again later');
  }
}
