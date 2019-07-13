import { NgModule } from '@angular/core';
import { SharedModule } from '../shared/shared.module';
import { SigninComponent } from 'app/public/pages/signin/signin.component';
import { PublicContentLayoutComponent } from './layouts/public-content/public-content-layout.component';
import { PublicFullLayoutComponent } from './layouts/public-full/public-full-layout.component';
import { SignupComponent } from 'app/public/pages/signup/signup.component';
import { VerifyEmailComponent } from 'app/public/pages/verify-email/verify-email.component';
import { ForgotPasswordComponent } from 'app/public/pages/forgot-password/forgot-password.component';
import { ResetPasswordComponent } from 'app/public/pages/reset-password/reset-password.component';

@NgModule({
    declarations: [
        SignupComponent,
        SigninComponent,
        PublicContentLayoutComponent,
        PublicFullLayoutComponent,
        VerifyEmailComponent,
        ForgotPasswordComponent,
        ResetPasswordComponent,
    ],
    imports: [
        SharedModule
    ],
    exports: [
        SharedModule,
        SignupComponent,
        SigninComponent,
        PublicContentLayoutComponent,
        PublicFullLayoutComponent,
        VerifyEmailComponent,
        ForgotPasswordComponent,
        ResetPasswordComponent,
    ]
})

export class PublicSharedModule { }
