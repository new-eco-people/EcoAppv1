import { Component, OnInit, ViewChild } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';
import { AuthService } from 'app/shared/services/auth/auth.service';
import { CustomValidator } from 'app/shared/validators/custom-validators';
import { CommonValidator } from 'app/shared/validators/common-validator';
import { ActivatedRoute, Router } from '@angular/router';
import { finalize } from 'rxjs/operators';
import { ToasterService } from 'app/shared/services/toaster/toaster.service';
import { CaptchaComponent } from 'angular-captcha';

@Component({
  selector: 'app-reset-password',
  templateUrl: './reset-password.component.html',
  styleUrls: ['./reset-password.component.scss']
})
export class ResetPasswordComponent implements OnInit {

  resetPasswordForm: FormGroup;
  loading = false;

  section = 'password';

  // uncomment the line bellow if you use Angular 8
  @ViewChild(CaptchaComponent) captchaComponent: CaptchaComponent;


  constructor(
    private fb: FormBuilder,
    private authService: AuthService,
    private route: ActivatedRoute,
    private toast: ToasterService,
    private router: Router
  ) { }

  ngOnInit() {
    this.initializeResetPasswordForm()
  }

  initializeResetPasswordForm() {
    this.resetPasswordForm = this.fb.group({
      password : [null, [CustomValidator.CustomRequired('Password'), CommonValidator.ValidPassword()]],
      confirmPassword: [null, [CustomValidator.CustomRequired('Confirm Password'), CommonValidator.confirmation('password')]],
      code: [null, [CustomValidator.CustomRequired('Capcha')]],
      id: [null]
    })
  }

  resetPassword() {
    const token = this.route.snapshot.queryParams['token'] || null;
    const userId = this.route.snapshot.queryParams['userId'] || null;
    const password = this.resetPasswordForm.value['password'];

    this.loading = true;

    const data = {code: this.captchaComponent.captchaCode, id: this.captchaComponent.captchaId}

    this.authService.resetPassword({token, userId, password, ...data})
      .pipe(finalize(() => this.loading = false))
      .subscribe(() => {
        this.toast.success('Password has been changed successfully');
        this.router.navigate(['public']);
      },
        error => {
          console.log(error);
          this.toast.error('An error occurred, kindly try again later');
          this.resetPasswordForm.reset();
        }
      )
  }

}
