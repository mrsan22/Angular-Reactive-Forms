/**
 * Created by kumars13 on 4/20/17.
 */
import { NgModule } from '@angular/core';

import { SharedModule } from '../shared/shared.module';
import { SignUpRoutingModule } from './signup-routing.module';

@NgModule({
  imports: [SharedModule, SignUpRoutingModule ],
  exports: [SignUpRoutingModule.components],
  declarations: [ SignUpRoutingModule.components ]
})
export class SignUpModule {

}
