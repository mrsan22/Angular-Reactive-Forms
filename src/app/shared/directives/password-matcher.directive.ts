/**
 * Created by kumars13 on 4/21/17.
 */
/**
 * Created by kumars13 on 4/20/17.
 */
import {Directive} from '@angular/core';
import {NG_VALIDATORS, AbstractControl} from '@angular/forms';


export const passwordMatcher = (control: AbstractControl): {[key: string]: boolean} => {
  const password = control.get('password');
  const vpassword = control.get('vpassword');
  if (!password || !vpassword) {
    return null;
  }
  // if (password.value === vpassword.value) {
  //   return null;
  //
  // } else {
  //   return {noMatch: true};
  // }
  return password.value === vpassword.value ? null : {noMatch: true};
};

@Directive({
  selector: '[appPasswordMatcher][ngModel]',
  providers: [
    {provide: NG_VALIDATORS, useValue: passwordMatcher, multi: true}
  ]
})
export class PasswordMatchDirective {

}
