import { Component, OnInit } from '@angular/core';
import { NgForm, FormGroup, FormBuilder } from '@angular/forms';
import { CustomValidator } from 'app/shared/validators/custom-validators';
import { AuthService } from 'app/shared/services/auth/auth.service';
import { finalize } from 'rxjs/operators';
import { ToasterService } from 'app/shared/services/toaster/toaster.service';
import { Router, ActivatedRoute } from '@angular/router';
import { CaptchaComponent } from 'angular-captcha';
import { ServerError } from 'app/shared/interceptors/form-error-handler';
import { FormErrorService } from 'app/shared/services/form-error/form-error.service';

@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.scss']
})
export class SigninComponent implements OnInit {

  signInForm: FormGroup;
  loading = false;

  returnUrl: string;

  constructor(
    private fb: FormBuilder,
    private authService: AuthService,
    private toast: ToasterService,
    private router: Router,
    private route: ActivatedRoute,
    private feService: FormErrorService
  ) { }

  ngOnInit() {
    this.initializeForm();
    this.returnUrl = this.route.snapshot.queryParams['token'] || 'private';
  }

  initializeForm() {
    this.signInForm = this.fb.group({
      emailAddress : [null, [CustomValidator.CustomRequired('Email'), CustomValidator.CustomEmail()]],
      password: [null, CustomValidator.CustomRequired('Password')],
      rememberMe: [null]
    })
  }

  signIn() {

    this.loading = true;

    this.authService.signinUser(this.signInForm.value)
      .pipe(finalize(() => this.loading = false))
      .subscribe((x) => {
        console.log(x);
        // this.router.navigate([this.returnUrl]);
      },
        (error) => {this.feService.setError(error.error as ServerError, this.signInForm); }
      )
  }

}
