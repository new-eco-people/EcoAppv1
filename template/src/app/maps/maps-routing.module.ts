import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { FullScreenMapComponent } from "./full-screen-map/full-screen-map.component";
import { GoogleMapComponent } from "./google-map/google-map.component";

const routes: Routes = [
  {
    path: '',
    children: [
      {
        path: 'fullscreen',
        component: FullScreenMapComponent,
        data: {
          title: 'Full Screen Map'
        }
      },
      {
        path: 'google',
        component: GoogleMapComponent,
        data: {
          title: 'Google Map'
        }
      } 
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MapsRoutingModule { }
