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
import { PrivateHomeNavbarComponent } from './components/home/private-home-navbar/private-home-navbar.component';
import { PrivateProblemCardComponent } from './components/problem/private-problem-card/private-problem-card.component';
import { PrivateCommunityFeedsComponent } from './components/communities/private-community-feeds/private-community-feeds.component';
import { PrivateCommunityCardComponent } from './components/communities/private-community-card/private-community-card.component';
import { PrivateProblemFeedsComponent } from './components/problem/private-problem-feeds/private-problem-feeds.component';
import { PrivateProjectFeedsComponent } from './components/project/private-project-feeds/private-project-feeds.component';
import { PrivateProjectCardComponent } from './components/project/private-project-card/private-project-card.component';
import { PrivateHomeTopnavbarComponent } from './components/home/private-home-topnavbar/private-home-topnavbar.component';
import { PrivateChatMessageComponent } from './components/chat/private-chat-message/private-chat-message.component';
import { PrivateChatFeedsComponent } from './components/chat/private-chat-feeds/private-chat-feeds.component';
import { PrivateAddProblemComponent } from './components/modals/problem/private-add-problem/private-add-problem.component';

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
        PrivateProfileCommunitiesComponent,
        PrivateHomeNavbarComponent,
        PrivateProblemCardComponent,
        PrivateCommunityFeedsComponent,
        PrivateCommunityCardComponent,
        PrivateProblemFeedsComponent,
        PrivateProjectFeedsComponent,
        PrivateProjectCardComponent,
        PrivateHomeTopnavbarComponent,
        PrivateChatMessageComponent,
        PrivateChatFeedsComponent,
        PrivateAddProblemComponent,
    ],
    entryComponents: [
        PrivateAddProblemComponent,
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
        PrivateProfileHeadComponent,
        PrivateHomeNavbarComponent,
        PrivateProblemCardComponent,
        PrivateCommunityFeedsComponent,
        PrivateCommunityCardComponent,
        PrivateProblemFeedsComponent,
        PrivateProjectFeedsComponent,
        PrivateProjectCardComponent,
        PrivateHomeTopnavbarComponent,
        PrivateChatMessageComponent,
        PrivateChatFeedsComponent,
        PrivateAddProblemComponent,
    ],
    providers: [
        FeedsService
    ]
})

export class PrivateSharedModule { }
