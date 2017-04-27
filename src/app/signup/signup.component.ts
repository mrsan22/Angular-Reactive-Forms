/**
 * Signup Form for the user
 */
import {Component, OnInit} from '@angular/core';
import {IUserSignUp} from '../shared/interfaces';
import {FormGroup, FormBuilder, Validators} from '@angular/forms';
import {validateEmail} from '../shared/directives/email-validator.directive';
import {passwordMatcher} from '../shared/directives/password-matcher.directive';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {
  signUpForm: FormGroup;

  constructor(private formBuilder: FormBuilder) {
  }

  ngOnInit(): void {
    this.buildForm();
  }

  buildForm(): void {
    this.signUpForm = this.formBuilder.group({
      name: this.formBuilder.group({
        firstName: ['', [Validators.required, Validators.minLength(2)], []],
        lastName: ''
      }),
      email: ['', [Validators.required, validateEmail]],
      userName: ['', [Validators.required]],
      password: this.formBuilder.group({
        password: ['', [Validators.required]],
        vpassword: ['', [Validators.required]]
      }, {validator: passwordMatcher})
    });
  }

  onSubmit(value: IUserSignUp): void {
    console.log(value);
  }

}
