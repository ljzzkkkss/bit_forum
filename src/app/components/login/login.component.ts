import {Component, OnInit} from '@angular/core';
import { Router } from '@angular/router';
import {AuthService} from "../../service/auth.service";
import {HttpService} from "../../service/http.service";
import {Constants} from "../../constants/constants"
import {Md5} from "ts-md5/dist/md5";
import {Subject} from "rxjs";

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
  private email : string;
  private confirmPassword : string;
  private loginvalidate : boolean = true;
  private usernamevalidate : boolean = false;
  private usernameterms = new Subject<string>();

  ngOnInit(): void {
    this.username = window.localStorage.getItem('bit_forum_username');
    this.password = window.localStorage.getItem('bit_forum_password');
    this.rememberme = (window.localStorage.getItem('bit_forum_rememberme') == '1');
    this.usernameterms
      .debounceTime(300)        // wait 300ms after each keystroke before considering the term
      .distinctUntilChanged()   // ignore if next search term is same as previous
      .switchMap(term => this.http.post(Constants.url + '/datainfo/user/queryByUsername', {username: term}))
      .subscribe(
        (result)=> {
          if(result.length > 0){
            this.usernamevalidate = false;
          }else{
            this.usernamevalidate = true;
          }
        },
        (error)=> {
          this.usernamevalidate = false;
          console.info(error);
        }
      );
    this.usernameterms.next(this.username);
  }

  constructor(public authService: AuthService, public router: Router, public http : HttpService) {
  }

  login(modal : any): void {
    this.authService.login(this.username, this.password).subscribe(() => {
      if (this.authService.isLoggedIn) {
        this.loginvalidate = true;
        let redirect = this.authService.redirectUrl ? this.authService.redirectUrl : '/homepage';
        console.info(redirect);
        $(modal).modal('hide');
        if (this.rememberme){
          window.localStorage.setItem('bit_forum_username', this.username);
          window.localStorage.setItem('bit_forum_password', this.password);
          window.localStorage.setItem('bit_forum_rememberme', '1');
        }else {
          window.localStorage.removeItem('bit_forum_username');
          window.localStorage.removeItem('bit_forum_password');
          window.localStorage.removeItem('bit_forum_rememberme');
        }
        window.localStorage.setItem('bit_forum_islogin', '1');
        // Redirect the user
        this.router.navigate([redirect]);
      }else{
        this.loginvalidate = false;
      }
    });
  }

  register(modal: any) : void {
    var data = {
      username: this.username,
      password: Md5.hashStr(this.password).toString(),
      email: this.email
    };
    this.http.post(Constants.url + '/datainfo/user/addUser', data).subscribe(
      (result)=> {
        if(result.code == 200){
          $(modal).modal('hide');
          $('#ConfirmModal').modal('show');
        }
      },
      (error)=> {
        console.info("error", error);
      }
    );
  }

 confirm() : void{
   $('#ConfirmModal').modal('hide');
   $('#LoginModal').modal('show');
 }

 checkusername(){
  this.usernameterms.next(this.username);
 }

}
