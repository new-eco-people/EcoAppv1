import { NgModule } from '@angular/core';
import { CommonModule } from "@angular/common";

import { VgCoreModule } from 'videogular2/core';
import { VgControlsModule } from 'videogular2/controls';
import { VgOverlayPlayModule } from 'videogular2/overlay-play';
import { VgBufferingModule } from 'videogular2/buffering';

import { PlayerRoutingModule } from "./player-routing.module";

import { PlayerComponent } from "./player.component";

@NgModule({
    imports: [
        CommonModule,
        PlayerRoutingModule,
        VgCoreModule,
        VgControlsModule,
        VgOverlayPlayModule,
        VgBufferingModule
    ],
    declarations: [
        PlayerComponent
    ]
})
export class PlayerModule { }
