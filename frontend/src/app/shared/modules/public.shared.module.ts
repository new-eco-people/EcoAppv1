import { NgModule } from '@angular/core';
import { SharedModule } from '../shared.module';
import { SigninComponent } from 'app/pages/public/signin/signin.component';
import { PublicContentLayoutComponent } from '../layouts/public/public-content/public-content-layout.component';
import { PublicFullLayoutComponent } from '../layouts/public/public-full/public-full-layout.component';
import { SignupComponent } from 'app/pages/public/signup/signup.component';
import { VerifyEmailComponent } from 'app/pages/public/verify-email/verify-email.component';

@NgModule({
    declarations: [
        SignupComponent,
        SigninComponent,
        PublicContentLayoutComponent,
        PublicFullLayoutComponent,
        VerifyEmailComponent,
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
        VerifyEmailComponent
    ]
})

export class PublicSharedModule { }
