import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PublicContentLayoutComponent } from 'app/shared/layouts/public/public-content/public-content-layout.component';
import { SigninComponent } from './signin/signin.component';
import { SignupComponent } from './signup/signup.component';

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
        }
      ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PublicRoutingModule { }
