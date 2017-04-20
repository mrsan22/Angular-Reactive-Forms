/**
 * Created by kumars13 on 4/20/17.
 */
import { NgModule } from '@angular/core';
// import { CommonModule } from '@angular/common';
// import { FormsModule } from '@angular/forms';

import { EmailValidatorDirective } from './directives/email-validator.directive';

@NgModule({
  imports: [],
  exports: [EmailValidatorDirective],
  declarations: [EmailValidatorDirective]
})

export class SharedModule {

}
