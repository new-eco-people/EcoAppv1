import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PrivateContentLayoutComponent } from 'app/private/layouts/private-content/private-content-layout.component';
import { PrivateFullLayoutComponent } from 'app/private/layouts/private-full/private-full-layout.component';
import { PrivateHomeComponent } from './pages/private-home/private-home.component';
import { PrivateProfileComponent } from './pages/private-profile/private-profile.component';
import { PrivateProfileIntroComponent } from './components/profile/private-profile-intro/private-profile-intro.component';
import { PrivateProfileProjectsComponent } from './components/profile/private-profile-projects/private-profile-projects.component';
import { PrivateProfileCommunitiesComponent } from './components/profile/private-profile-communities/private-profile-communities.component';


const routes: Routes = [
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full',
  },
  {
    path: '',
    component: PrivateContentLayoutComponent,
    children: [
    ]
  },
  {
    path: '',
    component: PrivateFullLayoutComponent,
    children: [
      {
        path: 'home',
        component: PrivateHomeComponent
      }
    ]
  },
  {
    path: '',
    component: PrivateFullLayoutComponent,
    children: [
      {
        path: 'profile',
        component: PrivateProfileComponent,
        children: [
          {
            path: '',
            redirectTo: 'intro',
            pathMatch: 'full',
          },
          {
            path: 'intro',
            component: PrivateProfileIntroComponent
          },
          {
            path: 'projects',
            component: PrivateProfileProjectsComponent
          },
          {
            path: 'communities',
            component: PrivateProfileCommunitiesComponent
          }
        ]
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PrivateRoutingModule { }
