import { NgModule } from '@angular/core';
import { BrowserModule }  from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppRoutingModule } from './app-routing.module';
import { EqualValidator } from '../validators/equal.validator';


import { ResetPassComponent } from '../components/resetpass/resetpass.component'
import { LoginComponent } from '../components/login/login.component';
import { AppComponent } from '../components/root/app.component';
import { HttpService } from "../service/http.service";

import { FroalaEditorModule, FroalaViewModule } from 'angular2-froala-wysiwyg';

@NgModule({
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpModule,
    FroalaEditorModule.forRoot(),
    FroalaViewModule.forRoot(),
  ],
  declarations: [
    LoginComponent,
    AppComponent,
    EqualValidator,
    ResetPassComponent
  ],
  providers: [HttpService],
  bootstrap: [ AppComponent ]
})
export class AppModule { }

