import { NgModule } from '@angular/core';
import { BrowserModule }  from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppRoutingModule } from './app-routing.module';
import { LoginComponent } from '../components/login/login.component';
import { AppComponent } from '../components/root/app.component';
import { EqualValidator } from '../validators/equal.validator';
import{ResetPassComponent} from '../components/resetpass/resetpass.component'

import { HomepageComponent } from '../components/homepage/homepage.component';
import { FourmsComponent } from '../components/forums/forums.component';
import { NavbarComponent } from '../components/navbar/navbar.component';
import {HttpService} from "../service/http.service";

import {CKEditorModule} from 'ng2-ckeditor';


@NgModule({
  imports: [
    BrowserModule,
    AppRoutingModule,
    CKEditorModule,
    FormsModule,
    HttpModule,
  ],
  declarations: [
    LoginComponent,
    AppComponent,
    HomepageComponent,
    EqualValidator,
    FourmsComponent,
    NavbarComponent,
    ResetPassComponent
  ],
  providers: [HttpService],
  bootstrap: [ AppComponent ]
})
export class AppModule { }

