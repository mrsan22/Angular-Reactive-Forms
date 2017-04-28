/**
 * Created by kumars13 on 4/21/17.
 */
import { NgModule, Optional, SkipSelf } from '@angular/core';

import { NavbarComponent } from './navbar/navbar.component';
import {EnsureModuleLoadedOnceGuard} from './module-import-guard';

import { MockBackendService } from './services/mock-backend.service';

@NgModule({
  imports: [],
  exports: [ NavbarComponent ],
  declarations: [ NavbarComponent ],
  providers: [ MockBackendService ] // these should be singleton
})
export class CoreModule extends EnsureModuleLoadedOnceGuard {    // Ensure that CoreModule is
// only loaded into AppModule

  // Looks for the module in the parent injector to see if it's already been loaded (only want
  // it loaded once)
  constructor( @Optional() @SkipSelf() parentModule: CoreModule) {
    super(parentModule);
  }

}
