import { Component, OnInit, ViewChild } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';
import { CustomValidator } from 'app/shared/validators/custom-validators';
import { AuthService } from 'app/shared/services/auth/auth.service';
import { finalize } from 'rxjs/operators';
import { ToasterService } from 'app/shared/services/toaster/toaster.service';
import { Router } from '@angular/router';
import { CaptchaComponent } from 'angular-captcha';
import { ServerError } from 'app/shared/interceptors/form-error-handler';
import { FormErrorService } from 'app/shared/services/form-error/form-error.service';

@Component({
  selector: 'app-forgot-password',
  templateUrl: './forgot-password.component.html',
  styleUrls: ['./forgot-password.component.scss']
})
export class ForgotPasswordComponent implements OnInit {

  forgotPasswordForm: FormGroup;

  loading = false;

     // uncomment the line bellow if you use Angular 8
  @ViewChild(CaptchaComponent) captchaComponent: CaptchaComponent;


  constructor(
    private fb: FormBuilder,
    private authService: AuthService,
    private toast: ToasterService,
    private router: Router,
    private formerrorService: FormErrorService
    ) { }

  ngOnInit() {
    this.initializeForm();
  }

  initializeForm() {
    this.forgotPasswordForm = this.fb.group({
      emailAddress: [null, [CustomValidator.CustomRequired('Email'), CustomValidator.CustomEmail()]],
      code: [null, [CustomValidator.CustomRequired('Capcha')]],
      id: [null]
    });
  }

  sendEmail() {
    // Start loading...
    this.loading = true;

    this.forgotPasswordForm.patchValue({ id: this.captchaComponent.captchaId });

    this.authService.sendForgotPasswordEmail(this.forgotPasswordForm.value)
    .pipe(finalize(() => this.loading = false))
    .subscribe((x: any) => {

      this.toast.success('Kindly check your email on how to reset your password');
      this.router.navigate(['public']);

    },
    (error: any) => {
      this.formerrorService.setError(error.error as ServerError, this.forgotPasswordForm);
      this.captchaComponent.reloadImage();
      }
    )

  }

}
