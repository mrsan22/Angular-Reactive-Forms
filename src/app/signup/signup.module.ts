/**
 * Created by kumars13 on 4/20/17.
 */
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';

import { SharedModule } from '../shared/shared.module';
// import { SignUpRoutingModule } from './signup-routing.module';

@NgModule({
  imports: [ ReactiveFormsModule, SharedModule ],
  exports: [ReactiveFormsModule],
  // declarations: [ SignUpRoutingModule.components ]
})
export class SignUpModule {

}
