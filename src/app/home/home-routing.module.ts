/**
 * Created by kumars13 on 5/2/17.
 */
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { HomeComponent } from './home.component';

const home_routes: Routes = [
  { path: 'home', component: HomeComponent }
];

@NgModule({
  imports: [ RouterModule.forChild(home_routes) ],
  exports: [ RouterModule ]
})
export class HomeRoutingModule {
  static components = [ HomeComponent ];
}
