import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { ErrorHandler, NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { TranslateModule } from '@ngx-translate/core';
import { PerfectScrollbarModule } from 'ngx-perfect-scrollbar';
// COMPONENTS
import { FooterComponent } from './components/footer/footer.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { NotificationSidebarComponent } from './components/notification-sidebar/notification-sidebar.component';
import { SidebarComponent } from './components/sidebar/sidebar.component';
import { SidebarDirective } from './directives/sidebar.directive';
import { SidebarAnchorToggleDirective } from './directives/sidebaranchortoggle.directive';
import { SidebarLinkDirective } from './directives/sidebarlink.directive';
import { SidebarListDirective } from './directives/sidebarlist.directive';
import { SidebarToggleDirective } from './directives/sidebartoggle.directive';
// DIRECTIVES
import { ToggleFullscreenDirective } from './directives/toggle-fullscreen.directive';
import { AppErrorHandler } from './interceptors/app-error.handler';
import { NgMaterial } from './modules/ng-material.module';
import { AuthService } from './services/auth/auth.service';
import { ToasterService } from './services/toaster/toaster.service';
import { ValidatorErrorMessageComponent } from './validators/validator-error-message/validator-error-message.component';
import { FormErrorService } from './services/form-error/form-error.service';




@NgModule({
    exports: [
        RouterModule,
        CommonModule,
        HttpClientModule,
        NgbModule,
        TranslateModule,
        PerfectScrollbarModule,
        FooterComponent,
        NavbarComponent,
        SidebarComponent,
        NotificationSidebarComponent,
        ToggleFullscreenDirective,
        SidebarDirective,
        NgMaterial,
        FormsModule,
        ReactiveFormsModule,
        ValidatorErrorMessageComponent,
    ],
    imports: [
        RouterModule,
        CommonModule,
        HttpClientModule,
        NgbModule,
        TranslateModule,
        PerfectScrollbarModule,
        NgMaterial,
        FormsModule,
        ReactiveFormsModule,
    ],
    declarations: [
        FooterComponent,
        NavbarComponent,
        SidebarComponent,
        NotificationSidebarComponent,
        ToggleFullscreenDirective,
        SidebarDirective,
        SidebarLinkDirective,
        SidebarListDirective,
        SidebarAnchorToggleDirective,
        SidebarToggleDirective,
        ValidatorErrorMessageComponent
    ],
    providers: [
        AuthService,
        ToasterService,
        FormErrorService,
        { provide: ErrorHandler, useClass: AppErrorHandler },
    ]
})
export class SharedModule { }
