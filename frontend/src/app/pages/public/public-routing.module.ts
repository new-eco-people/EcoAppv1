import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PublicContentLayoutComponent } from 'app/shared/layouts/public/public-content/public-content-layout.component';
import { SigninComponent } from './signin/signin.component';
import { SignupComponent } from './signup/signup.component';
import { VerifyEmailComponent } from './verify-email/verify-email.component';
import { PublicFullLayoutComponent } from 'app/shared/layouts/public/public-full/public-full-layout.component';

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
        }
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
