import { NgModule } from '@angular/core';
import { CommonModule } from "@angular/common";

import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { QuillModule } from 'ngx-quill'
import { PerfectScrollbarModule } from 'ngx-perfect-scrollbar';
import { FormsModule } from '@angular/forms';

import { InboxRoutingModule } from "./inbox-routing.module";

import { InboxComponent } from "./inbox.component";

import { SearchPipe } from 'app/shared/pipes/search.pipe';


@NgModule({
    imports: [
        CommonModule,
        InboxRoutingModule,
        NgbModule,
        QuillModule,
        FormsModule,
        PerfectScrollbarModule
    ],
    declarations: [
        InboxComponent,
        SearchPipe
    ]
})
export class InboxModule { }
