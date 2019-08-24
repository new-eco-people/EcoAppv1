import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PrivateContentLayoutComponent } from 'app/private/layouts/private-content/private-content-layout.component';
import { PrivateFullLayoutComponent } from 'app/private/layouts/private-full/private-full-layout.component';
import { PrivateHomeComponent } from './pages/private-home/private-home.component';
import { PrivateProfileComponent } from './pages/private-profile/private-profile.component';
import { PrivateProfileIntroComponent } from './components/profile/private-profile-intro/private-profile-intro.component';
import { PrivateProfileProjectsComponent } from './components/profile/private-profile-projects/private-profile-projects.component';
import { PrivateProfileCommunitiesComponent } from './components/profile/private-profile-communities/private-profile-communities.component';
import { AppRoutes } from 'app/shared/routes/app.routes';

// Get the whole routes of the app
const appRoutes = AppRoutes.generateRoutes();

const routes: Routes = [
  {
    path: '',
    redirectTo: appRoutes.private.home.name,
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
        path: appRoutes.private.home.name,
        component: PrivateHomeComponent
      }
    ]
  },
  {
    path: '',
    component: PrivateFullLayoutComponent,
    children: [
      {
        path: appRoutes.private.profile.name,
        component: PrivateProfileComponent,
        children: [
          {
            path: '',
            redirectTo: appRoutes.private.profile.intro.name,
            pathMatch: 'full',
          },
          {
            path: appRoutes.private.profile.intro.name,
            component: PrivateProfileIntroComponent
          },
          {
            path: appRoutes.private.profile.projects.name,
            component: PrivateProfileProjectsComponent
          },
          {
            path: appRoutes.private.profile.communities.name,
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
