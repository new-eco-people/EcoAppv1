import { NgModule } from '@angular/core';
import { CommonModule } from "@angular/common";

import { ColorPaletteRoutingModule } from "./color-palette-routing.module";

import { ColorPaletteComponent } from "./color-palette.component";

@NgModule({
    imports: [
        CommonModule,
        ColorPaletteRoutingModule,
    ],
    declarations: [
        ColorPaletteComponent       
    ]
})
export class ColorPaletteModule { }
