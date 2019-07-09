import { NgModule } from '@angular/core';
import { SharedModule } from '../shared.module';
import { AdminContentLayoutComponent } from '../layouts/admin/admin-content/admin-content-layout.component';
import { AdminFullLayoutComponent } from '../layouts/admin/admin-full/admin-full-layout.component';

@NgModule({
    declarations: [
        AdminContentLayoutComponent,
        AdminFullLayoutComponent
    ],
    imports: [
        SharedModule
    ],
    exports: [
        SharedModule,
        AdminContentLayoutComponent,
        AdminFullLayoutComponent
    ]
})

export class PrivateSharedModule { }
