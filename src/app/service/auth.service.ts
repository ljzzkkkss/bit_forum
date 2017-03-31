import {Injectable} from "@angular/core";
import "rxjs/add/observable/of";
import "rxjs/add/operator/do";
import "rxjs/add/operator/delay";
import {HttpService} from "./http.service";
import {Constants} from "../constants/constants";
import {Md5} from "ts-md5/dist/md5";
import {CookieUtil} from "../util/cookie.util";

@Injectable()
export class AuthService {
    // store the URL so we can redirect after logging in
    redirectUrl: string;

    constructor(public http : HttpService) {
    }

    login(username: string, password: string, rememberme: boolean): Promise<boolean>{
        return this.http.post(Constants.url + '/datainfo/user/login', {username: username,password: Md5.hashStr(password),rememberme:rememberme}).toPromise().then(
          (result)=> {
            console.info(result);
            if(result.success){
              CookieUtil.setCookie('USERNAME',username);
              CookieUtil.setCookie('SESSION_ID',result.sessonid);
              CookieUtil.setCookie('TOKEN',result.token);
              return true;
            }else {
              CookieUtil.delCookie('USERNAME');
              CookieUtil.delCookie('SESSION_ID');
              CookieUtil.delCookie('TOKEN');
              return false;
            }
          },
          (error)=> {
            console.info(error);
            return false;
          }
        )
    }
}
