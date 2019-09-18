import { NgModule } from '@angular/core';
import { CommonModule } from "@angular/common";

import { AgmCoreModule } from '@agm/core';
import { MapsRoutingModule } from "./maps-routing.module";

import { FullScreenMapComponent } from "./full-screen-map/full-screen-map.component";
import { GoogleMapComponent } from "./google-map/google-map.component";

@NgModule({
    imports: [
        CommonModule,
        MapsRoutingModule,
        AgmCoreModule
    ],
    declarations: [
        FullScreenMapComponent,
        GoogleMapComponent
    ]
})
export class MapsModule { }
