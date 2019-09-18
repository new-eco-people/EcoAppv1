import { NgModule } from '@angular/core';
import { CommonModule } from "@angular/common";

import { Ng2SmartTableModule } from 'ng2-smart-table';
import { TablesRoutingModule } from "./tables-routing.module";

import { ExtendedTableComponent } from "./extended/extended-table.component";
import { RegularTableComponent } from "./regular/regular-table.component";
import { SmartTableComponent } from "./smart-data-table/smart-data-table.component";

@NgModule({
    imports: [
        CommonModule,
        TablesRoutingModule,
        Ng2SmartTableModule
    ],
    declarations: [
        ExtendedTableComponent,
        RegularTableComponent,
        SmartTableComponent
    ]
})
export class TablesModule { }
