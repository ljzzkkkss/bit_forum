import { NgModule } from '@angular/core';
import { BrowserModule }  from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppRoutingModule } from './app-routing.module';
import { LoginComponent } from '../components/login/login.component';
import { AppComponent } from '../components/root/app.component';

import { HomepageComponent } from '../components/homepage/homepage.component';
import {HttpService} from "../service/http.service";

import { OwlModule } from 'ng2-owl-carousel';

@NgModule({
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpModule,
    OwlModule
  ],
  declarations: [
    LoginComponent,
    AppComponent,
    HomepageComponent
  ],
  providers: [HttpService],
  bootstrap: [ AppComponent ]
})
export class AppModule { }

