/**
 * Signup Component for the user
 */
import {Component, OnInit} from '@angular/core';
import {IUserSignUp} from '../shared/interfaces';
import {FormGroup, FormBuilder, Validators} from '@angular/forms';
import {Router} from '@angular/router';


import {validateEmail} from '../shared/directives/email-validator.directive';
import {passwordMatcher} from '../shared/directives/password-matcher.directive';
import {MockBackendService} from '../core/services/backend/mock-backend.service';
import {UserService} from '../core/services/user.service';
import {ToastService} from '../core/toast/toast.service';


@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css'],
  providers: []
})
/**
 * SignupComponent class
 */
export class SignupComponent implements OnInit {
  signUpForm: FormGroup;

  constructor(private formBuilder: FormBuilder,
              private mockBackendService: MockBackendService,
              private router: Router,
              private toastService: ToastService,
              private userService: UserService
  ) {
    this.mockBackendService.start();
  }

  ngOnInit(): void {
    this.buildForm();
  }

  /**
   * function to build reactive form
   * @returns void
   */
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
    this.userService
      .create(value)
      .subscribe(
                // the first argument is a function which runs on success
                (data) => {
                  if (data['success']) {
                    this.toastService.activate(`Signup successful!`);
                    this.router.navigate(['/login']);
                  } else {
                    this.toastService.activate('Username' + ' ' + data['newUser'].userName + ' ' + 'is already taken');
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
