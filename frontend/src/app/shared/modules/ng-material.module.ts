import { NgModule } from '@angular/core';
import {
    MatInputModule,
    MatFormFieldModule,
    MatCheckboxModule,
    MatProgressSpinnerModule,
    MatIconModule,
    MatSnackBarModule,
} from '@angular/material';

@NgModule({
    declarations: [],
    imports: [
        MatInputModule,
        MatFormFieldModule,
        MatCheckboxModule,
        MatProgressSpinnerModule,
        MatIconModule,
        MatSnackBarModule,
    ],
    exports: [
        MatInputModule,
        MatFormFieldModule,
        MatCheckboxModule,
        MatProgressSpinnerModule,
        MatIconModule,
        MatSnackBarModule,
    ]
})

export class NgMaterial { }
