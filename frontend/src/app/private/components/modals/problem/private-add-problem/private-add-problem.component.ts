import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { CustomValidator } from 'app/shared/validators/custom-validators';
import { STEPPER_GLOBAL_OPTIONS } from '@angular/cdk/stepper';
import { LocationService } from 'app/shared/services/location/location.service';
import { Country, State } from 'app/shared/domain/location';
import { MatSelectChange } from '@angular/material';
import { finalize } from 'rxjs/operators';

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

  countries: Country[];
  states: State[];

  loadingCountries = false;
  loadingStates = false;

  constructor(private _formBuilder: FormBuilder, private location: LocationService) {}

  ngOnInit() {
    this.initializeForm();
    this.getCountries_();
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

  getCountries_() {
    this.loadingCountries = true;

    this.location.getCountries()
      .pipe(finalize(() => this.loadingCountries = false))
      .subscribe((countries: Country[]) => {
      this.countries = countries;
    })
  }

  getStates(matset: MatSelectChange) {

    if (!matset.value) { return; }

    this.loadingStates = true;

    this.location.getStates(matset.value)
      .pipe(finalize(() => this.loadingStates = false))
      .subscribe((states: State[]) => {
      this.states = states;
    })
  }

}
