import { NgModule }             from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import{LoginComponent} from '../components/login/login.component'
import{HomepageComponent} from '../components/homepage/homepage.component'
import {AuthGuard} from "../service/auth-guard.service";
import {AuthService} from "../service/auth.service";


const routes: Routes = [
  { path: '', redirectTo: 'homepage', pathMatch: 'full' },
  { path: 'login', component:LoginComponent },
  {
    path: 'homepage',
    canActivate: [AuthGuard],
    children: [
      {
        path: '',
        children: [
          { path: '', component: HomepageComponent }
        ]
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
