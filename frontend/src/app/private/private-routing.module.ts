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
import { PrivateCommunityFeedsComponent } from './components/communities/private-community-feeds/private-community-feeds.component';
import { PrivateProblemFeedsComponent } from './components/problem/private-problem-feeds/private-problem-feeds.component';
import { PrivateProjectFeedsComponent } from './components/project/private-project-feeds/private-project-feeds.component';

// Get the whole routes of the app
const appRoutes = AppRoutes.generateRoutes();

const routes: Routes = [
  {
    path: '',
    redirectTo: appRoutes.private.home.name,
    pathMatch: 'full',
  },

  // Without sidebar--------------------------------------------------------
  {
    path: '',
    component: PrivateContentLayoutComponent,
    children: [
    ]
  },

  // With Sidebar-----------------------------------------------------------
  {
    path: '',
    component: PrivateFullLayoutComponent,
    children: [
      {

        // Home page with routes ------
        path: appRoutes.private.home.name,
        component: PrivateHomeComponent,
        children: [
          {
            // Redirect to problems if none is selected
            path: '',
            redirectTo: appRoutes.private.home.problems.name,
            pathMatch: 'full'
          },
          {
            // Community feeds
            path: appRoutes.private.home.communities.name,
            component: PrivateCommunityFeedsComponent
          },
          {
            //  Problem feeds
            path: appRoutes.private.home.problems.name,
            component: PrivateProblemFeedsComponent
          },
          {
            // project feeds
            path: appRoutes.private.home.projects.name,
            component: PrivateProjectFeedsComponent
          }
        ]
      },

      {
        // Profile page with routes
        path: appRoutes.private.profile.name,
        component: PrivateProfileComponent,
        children: [
          {
            // Redirect to into if none is selected
            path: '',
            redirectTo: appRoutes.private.profile.intro.name,
            pathMatch: 'full',
          },
          {
            // Profile Intro
            path: appRoutes.private.profile.intro.name,
            component: PrivateProfileIntroComponent
          },
          {
            // Profile Projects
            path: appRoutes.private.profile.projects.name,
            component: PrivateProfileProjectsComponent
          },
          {
            // Profile Communities
            path: appRoutes.private.profile.communities.name,
            component: PrivateProfileCommunitiesComponent
          }
        ]
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
