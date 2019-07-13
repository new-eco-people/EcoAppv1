import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PrivateContentLayoutComponent } from 'app/private/layouts/private-content/private-content-layout.component';
import { PrivateFullLayoutComponent } from 'app/private/layouts/private-full/private-full-layout.component';
import { PrivateHomeComponent } from './pages/private-home/private-home.component';


const routes: Routes = [
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full',
  },
  {
    path: '',
    component: PrivateContentLayoutComponent,
    children: [
    ]
  },
  {
    path: '',
    component: PrivateFullLayoutComponent,
    children: [
      {
        path: 'home',
        component: PrivateHomeComponent
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PrivateRoutingModule { }
