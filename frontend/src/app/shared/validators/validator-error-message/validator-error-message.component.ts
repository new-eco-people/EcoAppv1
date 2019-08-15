import { Component, OnInit, Input } from '@angular/core';
import { FormGroup } from '@angular/forms';

@Component({
  selector: 'app-validator-error-message',
  templateUrl: './validator-error-message.component.html',
  styleUrls: ['./validator-error-message.component.scss']
})
export class ValidatorErrorMessageComponent implements OnInit {

  @Input('form') form: FormGroup;
  @Input('field') field: string;

  start = false;

  constructor() { }

  ngOnInit() {
    // this.inputForm.valueChanges.subscribe(x => {
    //   this.start = true;
    //   this.form = this.inputForm;
    // });
  }

// tslint:disable-next-line: use-life-cycle-interface
  ngDoCheck(): void {}

}
