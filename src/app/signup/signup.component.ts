import {Component, OnInit} from '@angular/core';
import {IUserSignUp} from '../shared/interfaces';
import {FormGroup, FormBuilder, Validators} from '@angular/forms';
import {validateEmail} from '../shared/directives/email-validator.directive';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {
  signUpForm: FormGroup;

  constructor(private formBuilder: FormBuilder) {
  }

  ngOnInit() {
    this.buildForm();
  }

  buildForm() {
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
      })
    });
  }

  onSubmit(value: IUserSignUp) {
    console.log(value);
  }

}
