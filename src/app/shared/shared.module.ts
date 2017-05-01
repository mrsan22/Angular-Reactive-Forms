/**
 * Created by kumars13 on 4/20/17.
 */
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {ReactiveFormsModule} from '@angular/forms';

import { EmailValidatorDirective } from './directives/email-validator.directive';
import {PasswordMatchDirective} from './directives/password-matcher.directive';


@NgModule({
  imports: [CommonModule, ReactiveFormsModule],
  exports: [EmailValidatorDirective, CommonModule, PasswordMatchDirective, ReactiveFormsModule],
  declarations: [EmailValidatorDirective, PasswordMatchDirective]
})

export class SharedModule {

}
