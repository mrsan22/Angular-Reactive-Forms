import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';


import {IUserLogin} from '../shared/interfaces';
import {AuthService} from '../core/services/auth.service';
import {MockBackendService} from '../core/services/backend/mock-backend.service';
import {ToastService} from '../core/toast/toast.service';
import {Observable} from 'rxjs/Observable';
import {Router} from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
  providers: []
})
export class LoginComponent implements OnInit {
  loginForm: FormGroup;

  constructor(private formBuilder: FormBuilder,
              private authService: AuthService,
              private mockBackendService: MockBackendService,
              private router: Router,
              private toastService: ToastService
  ) {
    this.mockBackendService.auth();
  }

  ngOnInit() {
    this.buildForm();
  }

  /**
   * This function builds the reactive form for Login screen and applies the Validators
   */
  buildForm(): void {
    this.loginForm = this.formBuilder.group({
      userCredentials: this.formBuilder.group({
        userName: ['', [Validators.required, Validators.minLength(2)], []],
        password: ['', [Validators.required]],
      })
    });
  }

  /**
   * This function takes the user credentials as Input and calls the login auth service to check if user is
   * authorized to login.
   * @param {IUserLogin} userCredentials
   * @returns void
   */
  onSubmit(userCredentials: IUserLogin): void {
    this.authService
      .login(userCredentials)
      .subscribe(
        // the first argument is a function which runs on success
        (data) => {
          if (data['success']) {
            this.toastService.activate(`Successfully logged in`);
            this.router.navigate(['/home']);
          } else {
            this.toastService.activate(`Username or Password didn't match!`);
          }
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
