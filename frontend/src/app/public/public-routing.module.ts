import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PublicContentLayoutComponent } from 'app/public/layouts/public-content/public-content-layout.component';
import { SigninComponent } from './pages/signin/signin.component';
import { SignupComponent } from './pages/signup/signup.component';
import { VerifyEmailComponent } from './pages/verify-email/verify-email.component';
import { PublicFullLayoutComponent } from 'app/public/layouts/public-full/public-full-layout.component';
import { ForgotPasswordComponent } from './pages/forgot-password/forgot-password.component';
import { ResetPasswordComponent } from './pages/reset-password/reset-password.component';
import { SendEmailVerificationComponent } from './pages/send-email-verification/send-email-verification.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'signin',
    pathMatch: 'full',
  },
  {
      path: '',
      component: PublicContentLayoutComponent,
      children: [
        {
          path: 'signin',
          component: SigninComponent
        },
        {
          path: 'signup',
          component: SignupComponent
        },
        {
          path: 'verify-email',
          component: VerifyEmailComponent
        },
        {
          path: 'forgot-password',
          component: ForgotPasswordComponent
        },
        {
          path: 'reset-password',
          component: ResetPasswordComponent
        },
        {
          path: 'send-email-verification',
          component: SendEmailVerificationComponent
        },
      ]
  },
  {
    path: '',
    component: PublicFullLayoutComponent,
    children: [
    ]
}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PublicRoutingModule { }
