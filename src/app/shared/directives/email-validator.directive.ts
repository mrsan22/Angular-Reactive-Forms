/**
 * Created by kumars13 on 4/20/17.
 */
import {Directive} from '@angular/core';
import {NG_VALIDATORS, FormControl, AbstractControl} from '@angular/forms';

// RFC 2822 compliant regex
const EMAIL_REGEXP = /[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?/;

export function validateEmail(c: FormControl) {
  return (EMAIL_REGEXP.test(c.value) || c.value === '') ? null : {
    validateEmail: {
      valid: false
    }
  };
}

@Directive({
  selector: '[appValidateEmail][ngModel]',
  providers: [
    {provide: NG_VALIDATORS, useValue: validateEmail, multi: true}
  ]
})
export class EmailValidatorDirective {

}
