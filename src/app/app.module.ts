import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';

import { SharedModule } from './shared/shared.module';
import { SignUpModule } from './signup/signup.module';
import { SignupComponent } from './signup/signup.component';

@NgModule({
  declarations: [
    AppComponent,
    SignupComponent
  ],
  imports: [
    BrowserModule,
    HttpModule,
    SignUpModule, // Eagerly loaded as it's starting point
    SharedModule // Shared (multi-instance) objects
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
