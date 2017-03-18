import { Component } from '@angular/core';
import { Router } from '@angular/router';
import {AuthService} from "../../service/auth.service";

declare var $ : any;

@Component({
  selector: 'login',
  templateUrl: 'login.component.html',
  styleUrls: ['login.component.css']
})
export class LoginComponent {

  constructor(public authService: AuthService, public router: Router) {
  }

  login(modal : any): void {
    this.authService.login().subscribe(() => {
      if (this.authService.isLoggedIn) {
        // Get the redirect URL from our auth service
        // If no redirect has been set, use the default
        let redirect = this.authService.redirectUrl ? this.authService.redirectUrl : '/homepage';
        $(modal).modal('hide');
        // Redirect the user
        this.router.navigate([redirect]);
      }
    });
  }

  logout() {
    this.authService.logout();
  }
}
