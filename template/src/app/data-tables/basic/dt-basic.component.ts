import { Component } from '@angular/core';

declare var require: any;
const data: any = require('../../shared/data/company.json');

@Component({
    selector: 'app-dt-basic',
    templateUrl: './dt-basic.component.html',
    styleUrls: ['./dt-basic.component.scss']
})

export class DTBasicComponent {
    rows = [];
    loadingIndicator: boolean = true;
    reorderable: boolean = true;

    // DataTable Content Titles
    columns = [
        { prop: 'name' },
        { name: 'Gender' },
        { name: 'Company' }
    ];

    constructor() {
        this.rows = data;
        setTimeout(() => { this.loadingIndicator = false; }, 1500);
    }

    getRowHeight(row) {
      return row.height;
    }
}
