/**
 * Created by kumars13 on 5/2/17.
 */
import { NgModule } from '@angular/core';

import {HomeRoutingModule} from './home-routing.module';
import {SharedModule} from '../shared/shared.module';

@NgModule({
  imports: [SharedModule, HomeRoutingModule],
  // You export the LoginComponent so other modules that import the LoginModule can include it in their component templates.
  exports: [HomeRoutingModule.components],
  declarations: [HomeRoutingModule.components]
})
export class HomeModule {

}
