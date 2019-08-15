import { Component, OnInit, ViewChild } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';
import { AuthService } from 'app/shared/services/auth/auth.service';
import { CustomValidator } from 'app/shared/validators/custom-validators';
import { CommonValidator } from 'app/shared/validators/common-validator';
import { CaptchaComponent } from 'angular-captcha';
import { finalize } from 'rxjs/operators';
import { ToasterService } from 'app/shared/services/toaster/toaster.service';
import { Router } from '@angular/router';
import { ServerError } from 'app/shared/interceptors/form-error-handler';
import { FormErrorService } from 'app/shared/services/form-error/form-error.service';

@Component({
  selector: 'app-send-email-verification',
  templateUrl: './send-email-verification.component.html',
  styleUrls: ['./send-email-verification.component.scss']
})
export class SendEmailVerificationComponent implements OnInit {

  // uncomment the line bellow if you use Angular 8
  @ViewChild(CaptchaComponent) captchaComponent: CaptchaComponent;


  loading = false;
  sendVerificationForm: FormGroup;

  constructor(
    private fb: FormBuilder,
    private authService: AuthService,
    private toast: ToasterService,
    private router: Router,
    private feService: FormErrorService
    ) { }

  ngOnInit() {
    this.initializeForm();
  }

  initializeForm() {
    this.sendVerificationForm = this.fb.group({
      emailAddress : [null, [CustomValidator.CustomRequired('Email'), CustomValidator.CustomEmail()]],
      code: [null, [CustomValidator.CustomRequired('Capcha')]],
      id: [null]
    });
  }

  submit() {
    this.loading = true;

    this.sendVerificationForm.patchValue({ id: this.captchaComponent.captchaId });

    this.authService.resendEmailConfirmLink(this.sendVerificationForm.value)
      .pipe(finalize(() => this.loading = false))
      .subscribe((x) => {
        console.log(x);
        this.toast.success('A verification email has been sent');
        this.router.navigate(['public']);
      },
        error => {
          this.feService.setError(error.error as ServerError, this.sendVerificationForm);
          this.captchaComponent.reloadImage();
        }
      )
  }

}
