import { NgModule } from '@angular/core';
import {
    MatInputModule,
    MatFormFieldModule,
    MatCheckboxModule,
    MatProgressSpinnerModule,
    MatIconModule
} from '@angular/material';

@NgModule({
    declarations: [],
    imports: [
        MatInputModule,
        MatFormFieldModule,
        MatCheckboxModule,
        MatProgressSpinnerModule,
        MatIconModule
    ],
    exports: [
        MatInputModule,
        MatFormFieldModule,
        MatCheckboxModule,
        MatProgressSpinnerModule,
        MatIconModule
    ]
})

export class NgMaterial { }
