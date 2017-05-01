import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';


import {IUserLogin} from '../shared/interfaces';
import {AuthService} from '../core/services/auth.service';
import {MockBackendService} from '../core/services/mock-backend.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
  providers: [MockBackendService]
})
export class LoginComponent implements OnInit {
  loginForm: FormGroup;

  constructor(private formBuilder: FormBuilder,
              private authService: AuthService,
              private mockBackendService: MockBackendService
  ) {
    this.mockBackendService.auth();
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
    this.authService
      .login(userCredentials)
      .subscribe(
        // the first argument is a function which runs on success
        (data) => {
          console.log(data);
        },
        // the second argument is a function which runs on error
        (err) => {
          console.error(err);
        },
        // the third argument is a function which runs on completion
        () => {

        }
      );

  }

}
