import { Component, OnInit } from '@angular/core';
import { NgForm, FormGroup, FormBuilder } from '@angular/forms';
import { CustomValidator } from 'app/shared/validators/custom-validators';

@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.scss']
})
export class SigninComponent implements OnInit {

  signInForm: FormGroup;

  constructor(private fb: FormBuilder) { }

  ngOnInit() {
    this.initializeForm();
  }

  initializeForm() {
    this.signInForm = this.fb.group({
      usernameEmail : [null, [CustomValidator.CustomRequired('Username/Email')]],
      password: [null, CustomValidator.CustomRequired('Password')],
      rememberMe: [null]
    })
  }

  signIn() {
    console.log(this.signInForm.value);
  }

}
