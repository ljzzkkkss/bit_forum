import { NgModule } from '@angular/core';
import { BrowserModule }  from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { LoginComponent } from '../components/login/login.component';
import { AppComponent } from '../components/root/app.component';

import { HomepageComponent } from '../components/homepage/homepage.component';

@NgModule({
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  declarations: [
    LoginComponent,
    AppComponent,
    HomepageComponent
  ],
  bootstrap: [ AppComponent ]
})
export class AppModule { }

