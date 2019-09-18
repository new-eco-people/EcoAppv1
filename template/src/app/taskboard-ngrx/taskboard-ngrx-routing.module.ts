import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { TaskboardNGRXComponent } from './taskboard-ngrx.component';

const routes: Routes = [
  {
    path: '',
     component: TaskboardNGRXComponent,
    data: {
      title: 'Taskboard'
    },
    
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TaskboardNGRXRoutingModule { }