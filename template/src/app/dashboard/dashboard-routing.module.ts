import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Dashboard1Component } from "./dashboard1/dashboard1.component";
import { Dashboard2Component } from "./dashboard2/dashboard2.component";

const routes: Routes = [
  {
    path: '',
    children: [
      {
        path: 'dashboard1',
        component: Dashboard1Component,
        data: {
          title: 'Dashboard 1'
        }
      },
      {
        path: 'dashboard2',
        component: Dashboard2Component,
        data: {
          title: 'Dashboard 2'
        }
      },
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DashboardRoutingModule { }
