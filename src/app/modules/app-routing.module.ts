import { NgModule }             from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import{LoginComponent} from '../components/login/login.component';
import{HomepageComponent} from '../components/homepage/homepage.component';
import{ResetPassComponent} from '../components/resetpass/resetpass.component';
import{FourmsComponent} from '../components/forums/forums.component';
import {AuthGuard} from "../service/auth-guard.service";
import {AuthService} from "../service/auth.service";


const routes: Routes = [
  { path: '', redirectTo: 'homepage', pathMatch: 'full' },
  {
    path: 'login',
    canActivate: [AuthGuard],
    component:LoginComponent
  },{
    path: 'homepage',
    canActivate: [AuthGuard],
    component:HomepageComponent
  },{
    path: 'resetpass/:token',
    component:ResetPassComponent
  },{
    path: 'forums',
    canActivate: [AuthGuard],
    children: [
      {
        path: 'home',
        component: FourmsComponent
      }
    ]
  }
];

@NgModule({
  imports: [ RouterModule.forRoot(routes),RouterModule.forChild(routes) ],
  exports: [ RouterModule ],
  providers: [
    AuthGuard,
    AuthService
  ]
})
export class AppRoutingModule {}
