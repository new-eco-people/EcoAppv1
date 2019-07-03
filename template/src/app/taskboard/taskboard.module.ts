import { NgModule } from '@angular/core';
import { CommonModule } from "@angular/common";

import { DragulaModule } from 'ng2-dragula';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { TaskboardRoutingModule } from "./taskboard-routing.module";

import { TaskboardComponent } from "./taskboard.component";
import { CrudModalComponent } from './crud-modal/crud-modal.component';

@NgModule({
    imports: [
        CommonModule,
        TaskboardRoutingModule,
        DragulaModule,
        FormsModule,
        ReactiveFormsModule,
        NgbModule
    ],
    declarations: [
        TaskboardComponent,
        CrudModalComponent
    ],
    entryComponents: [
        CrudModalComponent
    ]
})
export class TaskboardModule { }
