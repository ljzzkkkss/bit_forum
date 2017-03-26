import { Injectable } from '@angular/core';

import { Observable } from 'rxjs/Observable';
import 'rxjs/add/observable/of';
import 'rxjs/add/operator/do';
import 'rxjs/add/operator/delay';
import {HttpService} from "./http.service";
import {Constants} from "../constants/constants";
import {Md5} from "ts-md5/dist/md5";
import {Subscription} from "rxjs";

@Injectable()
export class AuthService {
    isLoggedIn: boolean = (window.localStorage.getItem('bit_forum_islogin') == '1');

    // store the URL so we can redirect after logging in
    redirectUrl: string;

    constructor(public http : HttpService) {
    }

    login(username: string, password: string): Promise<boolean>{
        return this.http.post(Constants.url + '/datainfo/user/queryByUsername', {username: username}).toPromise().then(
          (result)=> {
            console.info(result);
            if(result.length > 0 && result[0].password == Md5.hashStr(password)){
              this.isLoggedIn = true;
              return true;
            }else {
              return false;
            }
          },
          (error)=> {
            console.info(error);
            return false;
          }
        )
    }

    logout(): void {
        this.isLoggedIn = false;
    }
}
