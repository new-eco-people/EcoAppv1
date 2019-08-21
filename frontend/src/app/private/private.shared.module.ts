import { NgModule } from '@angular/core';
import { PrivateContentLayoutComponent } from './layouts/private-content/private-content-layout.component';
import { PrivateFullLayoutComponent } from './layouts/private-full/private-full-layout.component';
import { SharedModule } from '../shared/shared.module';
import { PrivateHomeComponent } from 'app/private/pages/private-home/private-home.component';
import { FeedsService } from 'app/shared/services/feeds/feeds.service';
import { PrivateProfileComponent } from './pages/private-profile/private-profile.component';
import { PrivateNavbarComponent } from './components/private-navbar/private-navbar.component';
import { PrivateNotificationSidebarComponent } from './components/private-notification-sidebar/private-notification-sidebar.component';
import { PrivateSidebarComponent } from './components/private-sidebar/private-sidebar.component';
import { PrivateProfileHeadComponent } from './components/profile/private-profile-head/private-profile-head.component';
import { PrivateProfileIntroComponent } from './components/profile/private-profile-intro/private-profile-intro.component';
import { PrivateProfileProjectsComponent } from './components/profile/private-profile-projects/private-profile-projects.component';
import { PrivateProfileCommunitiesComponent } from './components/profile/private-profile-communities/private-profile-communities.component';

@NgModule({
    declarations: [
        PrivateContentLayoutComponent,
        PrivateFullLayoutComponent,
        PrivateHomeComponent,
        PrivateProfileComponent,
        PrivateNavbarComponent,
        PrivateNotificationSidebarComponent,
        PrivateSidebarComponent,
        PrivateProfileHeadComponent,
        PrivateProfileIntroComponent,
        PrivateProfileProjectsComponent,
        PrivateProfileCommunitiesComponent
    ],
    imports: [
        SharedModule
    ],
    exports: [
        SharedModule,
        PrivateContentLayoutComponent,
        PrivateFullLayoutComponent,
        PrivateHomeComponent,
        PrivateProfileComponent,
        PrivateNavbarComponent,
        PrivateNotificationSidebarComponent,
        PrivateSidebarComponent,
        PrivateProfileHeadComponent
    ],
    providers: [
        FeedsService
    ]
})

export class PrivateSharedModule { }
