import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AdminContentLayoutComponent } from 'app/admin/layouts/admin-content/admin-content-layout.component';
import { AdminFullLayoutComponent } from 'app/admin/layouts/admin-full/admin-full-layout.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full',
  },
  {
      path: '',
      component: AdminContentLayoutComponent,
      children: [
      ]
  },
  {
    path: '',
    component: AdminFullLayoutComponent,
    children: [
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AdminRoutingModule { }
