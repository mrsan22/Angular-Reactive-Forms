/**
 * Created by kumars13 on 4/20/17.
 */
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { SignupComponent } from './signup.component';

const routes: Routes = [
  { path: 'signup', component: SignupComponent }
];

@NgModule({
  imports: [ RouterModule.forChild(routes) ],
  exports: [ RouterModule ]
})
export class SignUpRoutingModule {
  static components = [ SignupComponent ];
}
