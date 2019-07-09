import { NgModule } from '@angular/core';
import { SharedModule } from '../shared.module';
import { AdminFullLayoutComponent } from '../layouts/admin/admin-full/admin-full-layout.component';
import { AdminContentLayoutComponent } from '../layouts/admin/admin-content/admin-content-layout.component';

@NgModule({
    declarations: [
        AdminFullLayoutComponent,
        AdminContentLayoutComponent
    ],
    imports: [
        SharedModule
    ],
    exports: [
        SharedModule,
        AdminFullLayoutComponent,
        AdminContentLayoutComponent
    ]
})

export class AdminSharedModule { }
