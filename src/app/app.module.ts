import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';

/* App Root */
import { AppComponent } from './app.component';

/* Feature modules */
import { SharedModule } from './shared/shared.module';
import { SignUpModule } from './signup/signup.module';
import { CoreModule } from './core/core.module';

/* Routing Module */
import { AppRoutingModule } from './app-routing.module';
import {LoginModule} from './login/login.module';
import {HomeModule} from './home/home.module';


@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    HttpModule,
    HomeModule, // Eagerly loaded as it's starting point
    SignUpModule, // Eagerly loaded as it may be starting point
    LoginModule, // Eagerly loaded as we may need to go right here
    AppRoutingModule, // Main routes for application
    SharedModule, // Shared (multi-instance) objects
    CoreModule // Singleton objects (services, components that are loaded only once, etc.)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
