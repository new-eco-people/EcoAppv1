import { NgModule } from '@angular/core';
import { SharedModule } from '../shared.module';

@NgModule({
    declarations: [
    ],
    imports: [
        SharedModule
    ],
    exports: [
        SharedModule
    ]
})

export class PrivateSharedModule { }
