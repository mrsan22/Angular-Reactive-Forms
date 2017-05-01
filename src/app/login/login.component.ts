import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {IUserLogin} from '../shared/interfaces';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  loginForm: FormGroup;

  constructor(private formBuilder: FormBuilder) {
  }

  ngOnInit() {
    this.buildForm();
  }

  buildForm(): void {
    this.loginForm = this.formBuilder.group({
      userCredentials: this.formBuilder.group({
        userName: ['', [Validators.required, Validators.minLength(2)], []],
        password: ['', [Validators.required]],
      })
    });
  }


  onSubmit(userCredentials: IUserLogin): void {
    console.log(userCredentials);
  }

}
