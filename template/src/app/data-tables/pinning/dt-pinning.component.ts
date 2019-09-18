import { Component } from '@angular/core';

//Declarations
declare var require: any;
const data: any = require('../../shared/data/employee.json');

@Component({
  selector: 'app-dt-pinning',
  templateUrl: './dt-pinning.component.html',
  styleUrls: ['./dt-pinning.component.scss']
})

export class DTPinningComponent {
  rows = [];

  constructor() {
    this.rows = data;
  }
}