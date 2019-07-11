import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { CommonValidator } from 'app/shared/validators/common-validator';
import { AuthService } from 'app/shared/services/auth/auth.service';
import { AppErrors, ServerError } from 'app/shared/interceptors/app-error.handler';
import { finalize } from 'rxjs/operators';
import { CustomValidator } from 'app/shared/validators/custom-validators';
import { ErrorMessage } from 'app/shared/validators/error-message';
import { ToasterService } from 'app/shared/services/toaster/toaster.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss']
})
export class SignupComponent implements OnInit {

  signupForm: FormGroup;
  loading = false;

  errorMessage: ErrorMessage

  constructor(
    private fb: FormBuilder, 
    private authService: AuthService, 
    private toasterService: ToasterService,
    private router: Router) { }

  ngOnInit() {
    this.initializeSignupForm();
  }

  initializeSignupForm() {
    this.signupForm = this.fb.group({
      firstName : [null, [CustomValidator.CustomRequired('First Name')]],
      lastName : [null, [CustomValidator.CustomRequired('Last Name')]],
      username : [null, [CustomValidator.CustomRequired('Username')]],
      emailAddress : [null, [CustomValidator.CustomRequired('Email'), CustomValidator.CustomEmail()]],
      password : [null, [CustomValidator.CustomRequired('Password')]],
      confirmPassword: [null, [CustomValidator.CustomRequired('Confirm Password'), CommonValidator.confirmation('password')]],
      agreeToTermsAndCondition: [null, [CustomValidator.CustomRequiredTrue('Terms and Conditions')]]
    });
  }

  submit() {
    this.loading = true;

    this.authService.signupUser(this.signupForm.value)
    .pipe(finalize(() => this.loading = false))
    .subscribe((x) => {
      this.toasterService.success('An email has been sent to you, please verify your email address');
      this.router.navigate(['public']);
    },
    (error: any) => {
      AppErrors.setError(error.error as ServerError, this.signupForm);
      }
    )
  }

}
