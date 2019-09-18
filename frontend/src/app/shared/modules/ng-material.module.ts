import { NgModule } from '@angular/core';
import {
    MatInputModule,
    MatFormFieldModule,
    MatCheckboxModule,
    MatProgressSpinnerModule,
    MatIconModule,
    MatSnackBarModule,
    MatTooltipModule,
    MatButtonModule,
    MatDialogModule,
    MatStepperModule,
    MatSelectModule,
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
        MatButtonModule,
        MatDialogModule,
        MatStepperModule,
        MatSelectModule,
    ],
    exports: [
        MatInputModule,
        MatFormFieldModule,
        MatCheckboxModule,
        MatProgressSpinnerModule,
        MatIconModule,
        MatSnackBarModule,
        MatTooltipModule,
        MatButtonModule,
        MatDialogModule,
        MatStepperModule,
        MatSelectModule,
    ]
})

export class NgMaterial { }
