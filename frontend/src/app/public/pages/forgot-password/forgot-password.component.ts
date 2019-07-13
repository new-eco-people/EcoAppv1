import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';
import { CustomValidator } from 'app/shared/validators/custom-validators';
import { AuthService } from 'app/shared/services/auth/auth.service';
import { finalize } from 'rxjs/operators';
import { ToasterService } from 'app/shared/services/toaster/toaster.service';
import { Router } from '@angular/router';
import { AppErrors, ServerError } from 'app/shared/interceptors/app-error.handler';

@Component({
  selector: 'app-forgot-password',
  templateUrl: './forgot-password.component.html',
  styleUrls: ['./forgot-password.component.scss']
})
export class ForgotPasswordComponent implements OnInit {

  forgotPasswordForm: FormGroup;

  loading = false;

  constructor(
    private fb: FormBuilder,
    private authService: AuthService,
    private toast: ToasterService,
    private router: Router
    ) { }

  ngOnInit() {
    this.initializeForm();
  }

  initializeForm() {
    this.forgotPasswordForm = this.fb.group({
      emailAddress: [null, [CustomValidator.CustomRequired('Email'), CustomValidator.CustomEmail()]]
    });
  }

  sendEmail() {
    this.loading = true;

    this.authService.sendForgotPasswordEmail(this.forgotPasswordForm.value['emailAddress'])
    .pipe(finalize(() => this.loading = false))
    .subscribe((x: any) => {

      this.toast.success('Kindly check your email on how to reset your password');
      this.router.navigate(['public']);

    },
    (error: any) => {
      AppErrors.setError(error.error as ServerError, this.forgotPasswordForm);
      }
    )

  }

}
