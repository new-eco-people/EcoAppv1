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
import { AppRoutes } from 'app/shared/routes/app.routes';

// Get the whole routes of the app
const appRoutes = AppRoutes.generateRoutes();

const routes: Routes = [
  {
    path: '',
    redirectTo: appRoutes.public.signIn.name,
    pathMatch: 'full',
  },
  {
      path: '',
      component: PublicContentLayoutComponent,
      children: [
        {
          path: appRoutes.public.signIn.name,
          component: SigninComponent
        },
        {
          path: appRoutes.public.signUp.name,
          component: SignupComponent
        },
        {
          path: appRoutes.public.verifyEmail.name,
          component: VerifyEmailComponent
        },
        {
          path: appRoutes.public.forgotPassword.name,
          component: ForgotPasswordComponent
        },
        {
          path: appRoutes.public.resetPassword.name,
          component: ResetPasswordComponent
        },
        {
          path: appRoutes.public.sendEmailVerification.name,
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
