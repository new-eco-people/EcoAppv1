import { NgModule } from '@angular/core';
import { PrivateContentLayoutComponent } from '../layouts/private/private-content/private-content-layout.component';
import { PrivateFullLayoutComponent } from '../layouts/private/private-full/private-full-layout.component';
import { SharedModule } from '../shared.module';

@NgModule({
    declarations: [
        PrivateContentLayoutComponent,
        PrivateFullLayoutComponent
    ],
    imports: [
        SharedModule
    ],
    exports: [
        SharedModule,
        PrivateContentLayoutComponent,
        PrivateFullLayoutComponent
    ]
})

export class PrivateSharedModule { }
