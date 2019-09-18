import { Component } from '@angular/core';

//Declarations
declare var require: any;
const data: any = require('../../shared/data/company.json');

@Component({
  selector: 'app-dt-paging',
  templateUrl: './dt-paging.component.html',
  styleUrls: ['./dt-paging.component.scss']
})

export class DTPagingComponent {
  rows = [];

  constructor() {
    this.rows = data;
  }
}