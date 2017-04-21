/**
 * Created by kumars13 on 4/21/17.
 */
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

export const app_routes: Routes = [
  { path: '', redirectTo: 'signup', pathMatch: 'full'},
];

@NgModule({
  imports: [RouterModule.forRoot(app_routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {

}
