import { NgModule } from '@angular/core';
import { SharedModule } from '../shared/shared.module';
import { SigninComponent } from 'app/public/pages/signin/signin.component';
import { PublicContentLayoutComponent } from './layouts/public-content/public-content-layout.component';
import { PublicFullLayoutComponent } from './layouts/public-full/public-full-layout.component';
import { SignupComponent } from 'app/public/pages/signup/signup.component';
import { VerifyEmailComponent } from 'app/public/pages/verify-email/verify-email.component';
import { ForgotPasswordComponent } from 'app/public/pages/forgot-password/forgot-password.component';
import { ResetPasswordComponent } from 'app/public/pages/reset-password/reset-password.component';
// import the Angular Captcha Module
import { BotDetectCaptchaModule } from 'angular-captcha';
import { SendEmailVerificationComponent } from './pages/send-email-verification/send-email-verification.component';

@NgModule({
    declarations: [
        SignupComponent,
        SigninComponent,
        PublicContentLayoutComponent,
        PublicFullLayoutComponent,
        VerifyEmailComponent,
        ForgotPasswordComponent,
        ResetPasswordComponent,
        SendEmailVerificationComponent,
    ],
    imports: [
        SharedModule,
        BotDetectCaptchaModule.forRoot({
            captchaEndpoint: `${window.location.origin}/api/simple-captcha-endpoint.ashx`
        }),
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
        SendEmailVerificationComponent,
    ]
})

export class PublicSharedModule { }
