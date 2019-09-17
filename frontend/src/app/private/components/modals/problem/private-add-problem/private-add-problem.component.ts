import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { CustomValidator } from 'app/shared/validators/custom-validators';
import { STEPPER_GLOBAL_OPTIONS } from '@angular/cdk/stepper';

@Component({
  selector: 'app-private-add-problem',
  templateUrl: './private-add-problem.component.html',
  styleUrls: ['./private-add-problem.component.scss'],
  providers: [{
    provide: STEPPER_GLOBAL_OPTIONS, useValue: {displayDefaultIndicatorType: false}
  }]
})
export class PrivateAddProblemComponent implements OnInit {

  isLinear = false;
  firstFormGroup: FormGroup;
  secondFormGroup: FormGroup;

  createEcoProblemForm: FormGroup;

  constructor(private _formBuilder: FormBuilder) {}

  ngOnInit() {
    this.initializeForm();
  }

  initializeForm() {
    this.createEcoProblemForm = this._formBuilder.group({
      countryId: [null, [CustomValidator.CustomRequired('Country')]],
      stateId: [null, [CustomValidator.CustomRequired('State/Region')]],
      ecoId: [null, [CustomValidator.CustomRequired('Type')]],
      unGoalsId: [null, [CustomValidator.CustomRequired('Un Goals')]],
      affectedId: [null, [CustomValidator.CustomRequired('Affected')]],
      description: [null, [CustomValidator.CustomRequired('Description')]],
      photos: [null, [CustomValidator.CustomRequired('Photos')]]
    });
  }

}
