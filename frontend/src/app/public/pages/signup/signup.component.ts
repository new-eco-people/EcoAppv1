import { Component, OnInit, ViewChild } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';
import { CommonValidator } from 'app/shared/validators/common-validator';
import { AuthService } from 'app/shared/services/auth/auth.service';
import { finalize } from 'rxjs/operators';
import { CustomValidator } from 'app/shared/validators/custom-validators';
import { ToasterService } from 'app/shared/services/toaster/toaster.service';
import { Router } from '@angular/router';

import { CaptchaComponent } from 'angular-captcha';
import { ServerError } from 'app/shared/interceptors/form-error-handler';
import { FormErrorService } from 'app/shared/services/form-error/form-error.service';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss']
})
export class SignupComponent implements OnInit {

   // uncomment the line bellow if you use Angular 8
  @ViewChild(CaptchaComponent) captchaComponent: CaptchaComponent;

  signupForm: FormGroup;
  loading = false;

  constructor(
    private fb: FormBuilder,
    private authService: AuthService,
    private toasterService: ToasterService,
    private router: Router,
    private feService: FormErrorService
    ) { }

  ngOnInit() {
    this.initializeSignupForm();
  }

  initializeSignupForm() {
    this.signupForm = this.fb.group({
      firstName : [null, [CustomValidator.CustomRequired('First Name')]],
      lastName : [null, [CustomValidator.CustomRequired('Last Name')]],
      emailAddress : [null, [CustomValidator.CustomRequired('Email'), CustomValidator.CustomEmail()]],
      password : [null, [CustomValidator.CustomRequired('Password'), CommonValidator.ValidPassword()]],
      confirmPassword: [null, [CustomValidator.CustomRequired('Confirm Password'), CommonValidator.confirmation('password')]],
      agreeToTermsAndCondition: [null, [CustomValidator.CustomRequiredTrue('Terms and Conditions')]],
      code: [null, [CustomValidator.CustomRequired('Capcha')]],
      id: [null]
    });
  }

  submit() {
    this.loading = true;

    this.signupForm.patchValue({ id: this.captchaComponent.captchaId });

    this.authService.signupUser(this.signupForm.value)
    .pipe(finalize(() => this.loading = false))
    .subscribe((x) => {
      this.toasterService.success('An email has been sent to you, please verify your email address');
      this.router.navigate(['public']);
    },
    (error: any) => {
      this.feService.setError(error.error as ServerError, this.signupForm);
      this.captchaComponent.reloadImage();
      }
    )
  }

}
