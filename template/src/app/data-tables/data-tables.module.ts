import { NgModule } from '@angular/core';
import { CommonModule } from "@angular/common";

import { NgxDatatableModule } from '@swimlane/ngx-datatable';
import { DataTablesRoutingModule } from "./data-tables-routing.module";

import { DTFullScreenComponent } from "./fullscreen/dt-fullscreen.component";
import { DTEditingComponent } from "./editing/dt-editing.component";
import { DTFilterComponent } from "./filter/dt-filter.component";
import { DTPagingComponent } from "./paging/dt-paging.component";
import { DTPinningComponent } from "./pinning/dt-pinning.component";
import { DTSelectionComponent } from "./selection/dt-selection.component";
import { DTSortingComponent } from "./sorting/dt-sorting.component";
import { DTBasicComponent } from "./basic/dt-basic.component";

@NgModule({
    imports: [
        CommonModule,
        DataTablesRoutingModule,
        NgxDatatableModule
    ],
    declarations: [
        DTFullScreenComponent,
        DTEditingComponent,
        DTFilterComponent,
        DTPagingComponent,
        DTPinningComponent,
        DTSelectionComponent,
        DTSortingComponent,
        DTBasicComponent,
    ]
})
export class DataTablesModule { }
