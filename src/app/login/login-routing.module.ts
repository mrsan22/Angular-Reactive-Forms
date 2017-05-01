/**
 * Created by kumars13 on 4/30/17.
 */
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { LoginComponent } from './login.component';

const login_routes: Routes = [
  { path: 'login', component: LoginComponent }
];

@NgModule({
  imports: [ RouterModule.forChild(login_routes) ],
  exports: [ RouterModule ]
})
export class LoginRoutingModule {
  static components = [ LoginComponent ];
}
