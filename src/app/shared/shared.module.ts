/**
 * Created by kumars13 on 4/20/17.
 */
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';


import { EmailValidatorDirective } from './directives/email-validator.directive';
import {PasswordMatchDirective} from './directives/password-matcher.directive';

@NgModule({
  imports: [CommonModule],
  exports: [EmailValidatorDirective, CommonModule, PasswordMatchDirective],
  declarations: [EmailValidatorDirective, PasswordMatchDirective]
})

export class SharedModule {

}
