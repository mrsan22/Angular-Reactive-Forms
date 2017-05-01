/**
 * Created by kumars13 on 4/21/17.
 */
import {NgModule, Optional, SkipSelf} from '@angular/core';
import {RouterModule} from '@angular/router';

import {NavbarComponent} from './navbar/navbar.component';
import {EnsureModuleLoadedOnceGuard} from './module-import-guard';

import {MockBackendService} from './services/mock-backend.service';
import {UserService} from './services/user.service';
import {BaseRequestOptions, Http} from '@angular/http';
import {MockBackend} from '@angular/http/testing';


@NgModule({
  imports: [RouterModule],
  exports: [NavbarComponent, RouterModule],
  declarations: [NavbarComponent],
  // these should be singleton
  providers: [
    MockBackendService,
    MockBackend,
    BaseRequestOptions,
    {
      provide: Http,
      deps: [MockBackend, BaseRequestOptions],
      useFactory: (backend: MockBackend, options: BaseRequestOptions) => {
        return new Http(backend, options);
      }
    },
    UserService
  ]
})
export class CoreModule extends EnsureModuleLoadedOnceGuard {    // Ensure that CoreModule is
// only loaded into AppModule

  // Looks for the module in the parent injector to see if it's already been loaded (only want
  // it loaded once)
  constructor(@Optional() @SkipSelf() parentModule: CoreModule) {
    super(parentModule);
  }

}
