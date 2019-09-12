import { NgModule } from '@angular/core';
import {
    MatInputModule,
    MatFormFieldModule,
    MatCheckboxModule,
    MatProgressSpinnerModule,
    MatIconModule,
    MatSnackBarModule,
    MatTooltipModule,
    MatButtonModule
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
        MatTooltipModule,
        MatButtonModule
    ],
    exports: [
        MatInputModule,
        MatFormFieldModule,
        MatCheckboxModule,
        MatProgressSpinnerModule,
        MatIconModule,
        MatSnackBarModule,
        MatTooltipModule,
        MatButtonModule
    ]
})

export class NgMaterial { }
