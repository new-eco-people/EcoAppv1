import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AuthService } from 'app/shared/services/auth/auth.service';
import { finalize } from 'rxjs/operators';
import { FormGroup, FormBuilder } from '@angular/forms';
import { CustomValidator } from 'app/shared/validators/custom-validators';
import { AppErrors, ServerError } from 'app/shared/interceptors/app-error.handler';
import { ToasterService } from 'app/shared/services/toaster/toaster.service';

@Component({
  selector: 'app-verify-email',
  templateUrl: './verify-email.component.html',
  styleUrls: ['./verify-email.component.scss']
})
export class VerifyEmailComponent implements OnInit {

  loading = true;
  isVerified = 'unknown';

  resendForm: FormGroup;
  resendLoading = false;

  constructor(
    private route: ActivatedRoute,
    private authService: AuthService,
    private fb: FormBuilder,
    private router: Router,
    private toasterService: ToasterService
    ) { }

  ngOnInit() {
    this.verfiyEmail();
  }

  verfiyEmail() {
    const token = this.route.snapshot.queryParams['token'] || null;
    const userId = this.route.snapshot.queryParams['userId'] || null;

    this.authService.verifyEmail({token, userId})
      .pipe(finalize(() => this.loading = false))
      .subscribe((x: boolean) => {
        console.log(x);
        // Email verified properly
        if (x) {
          this.isVerified = 'true';
        } else {
          // Email did not verify
          this.isVerified = 'false'
          this.initializeResendForm();
        }
      },
      // Server error
      () => {
        this.toasterService.error('Email has already been confirmed');
        this.router.navigate(['public']);
      });
  }

  initializeResendForm() {
    this.resendForm = this.fb.group({
      emailAddress: [null, [CustomValidator.CustomRequired('Email')]]
    });
  }

  resendEmail() {
    this.resendLoading = true;

    this.authService.resendEmailConfirmLink(this.resendForm.get('emailAddress').value)

    .pipe(finalize(() => this.resendLoading = false))

    .subscribe(x => {
      this.toasterService.success('A link has been sent to your email');
      this.router.navigate(['public']);
    },

    (error: any) => AppErrors.setError(error.error as ServerError, this.resendForm)

    );
  }

}
