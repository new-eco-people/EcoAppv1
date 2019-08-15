import { NgModule } from '@angular/core';
import { PrivateContentLayoutComponent } from './layouts/private-content/private-content-layout.component';
import { PrivateFullLayoutComponent } from './layouts/private-full/private-full-layout.component';
import { SharedModule } from '../shared/shared.module';
import { PrivateHomeComponent } from 'app/private/pages/private-home/private-home.component';
import { FeedsService } from 'app/shared/services/feeds/feeds.service';

@NgModule({
    declarations: [
        PrivateContentLayoutComponent,
        PrivateFullLayoutComponent,
        PrivateHomeComponent,
    ],
    imports: [
        SharedModule
    ],
    exports: [
        SharedModule,
        PrivateContentLayoutComponent,
        PrivateFullLayoutComponent,
        PrivateHomeComponent
    ],
    providers: [
        FeedsService
    ]
})

export class PrivateSharedModule { }
