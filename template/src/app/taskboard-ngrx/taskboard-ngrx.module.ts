import { NgModule } from '@angular/core';
import { CommonModule } from "@angular/common";
import { StoreModule } from '@ngrx/store';

import { DragulaModule } from 'ng2-dragula';
import { TaskboardNGRXRoutingModule } from "./taskboard-ngrx-routing.module";

import { TaskboardNGRXComponent } from "./taskboard-ngrx.component";
import { taskReducer } from '../taskboard-ngrx/store/taskboard.reducers';


@NgModule({
    imports: [
        CommonModule,
        TaskboardNGRXRoutingModule,
        DragulaModule,
        StoreModule.forFeature('task', taskReducer)
    ],
    declarations: [
        TaskboardNGRXComponent
    ]
})
export class TaskboardNGRXModule { }
