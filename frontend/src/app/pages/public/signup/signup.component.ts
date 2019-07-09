import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { CommonValidator } from 'app/shared/validators/common-validator';
import { AuthService } from 'app/shared/services/auth/auth.service';
import { AppErrors, ServerError } from 'app/shared/interceptors/app-error.handler';
import { finalize } from 'rxjs/operators';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss']
})
export class SignupComponent implements OnInit {

  signupForm: FormGroup;
  loading = false;

  constructor(private fb: FormBuilder, private authService: AuthService) { }

  ngOnInit() {
    this.initializeSignupForm();
  }

  initializeSignupForm() {
    this.signupForm = this.fb.group({
      firstName : [null, [Validators.required]],
      lastName : [null, [Validators.required]],
      username : [null, [Validators.required]],
      emailAddress : [null, [Validators.required, Validators.email]],
      password : [null, [Validators.required]],
      confirmPassword: [null, [Validators.required, CommonValidator.confirmation('password')]],
      agreeToTermsAndCondition: [null, [Validators.requiredTrue]]
    });
  }

  submit() {
    this.loading = true;

    this.authService.signupUser(this.signupForm.value)
    .pipe(finalize(() => this.loading = false))
    .subscribe((x) => {
      console.log(x);
    },
    (error: any) => { AppErrors.setError(error.error as ServerError, this.signupForm); }
    )
  }

}
