import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PrivateContentLayoutComponent } from 'app/shared/layouts/private/private-content/private-content-layout.component';


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
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PrivateRoutingModule { }
