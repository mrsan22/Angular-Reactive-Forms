import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';

/* App Root */
import { AppComponent } from './app.component';

/* Feature modules */
import { SharedModule } from './shared/shared.module';
import { SignUpModule } from './signup/signup.module';

/* Routing Module */
import { AppRoutingModule } from './app-routing.module';


@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    HttpModule,
    SignUpModule, // Eagerly loaded as it's starting point
    AppRoutingModule, // Main routes for application
    SharedModule, // Shared (multi-instance) objects
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
