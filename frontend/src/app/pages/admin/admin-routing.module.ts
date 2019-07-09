import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AdminContentLayoutComponent } from 'app/shared/layouts/admin/admin-content/admin-content-layout.component';

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
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AdminRoutingModule { }
