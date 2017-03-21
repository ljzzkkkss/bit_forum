import {Component, OnInit} from '@angular/core';
import { Router } from '@angular/router';
import {AuthService} from "../../service/auth.service";

declare var $ : any;

@Component({
  selector: 'login',
  templateUrl: 'login.component.html',
  styleUrls: ['login.component.css']
})
export class LoginComponent implements OnInit{
  private username : string;
  private password : string;
  private rememberme : boolean = false;

  ngOnInit(): void {
    this.username = window.localStorage.getItem('bit_forum_usernmae');
    this.password = window.localStorage.getItem('bit_forum_password');
    this.rememberme = (window.localStorage.getItem('bit_forum_rememberme') == '1');
  }

  constructor(public authService: AuthService, public router: Router) {
  }

  login(modal : any): void {
    this.authService.login().subscribe(() => {
      if (this.authService.isLoggedIn) {
        // Get the redirect URL from our auth service
        // If no redirect has been set, use the default
        let redirect = this.authService.redirectUrl ? this.authService.redirectUrl : '/homepage';
        console.info(redirect);
        $(modal).modal('hide');
        if (this.rememberme){
          window.localStorage.setItem('bit_forum_usernmae', this.username);
          window.localStorage.setItem('bit_forum_password', this.password);
          window.localStorage.setItem('bit_forum_rememberme', '1');
        }else {
          window.localStorage.removeItem('bit_forum_usernmae');
          window.localStorage.removeItem('bit_forum_password');
          window.localStorage.removeItem('bit_forum_rememberme');
        }
        window.localStorage.setItem('bit_forum_islogin', '1');
        // Redirect the user
        this.router.navigate([redirect]);
      }
    });
  }
}
