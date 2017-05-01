/**
 * Created by kumars13 on 4/30/17.
 */
import { NgModule } from '@angular/core';

import {LoginRoutingModule} from './login-routing.module';
import {SharedModule} from '../shared/shared.module';

@NgModule({
  imports: [SharedModule, LoginRoutingModule],
  // You export the LoginComponent so other modules that import the LoginModule can include it in their component templates.
  exports: [LoginRoutingModule.components],
  declarations: [LoginRoutingModule.components]
})
export class LoginModule {

}
