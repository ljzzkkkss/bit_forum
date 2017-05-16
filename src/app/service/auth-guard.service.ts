import { Injectable }     from '@angular/core';
import {CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router}    from '@angular/router';
import {AuthService} from "./auth.service";
import {HttpService} from "./http.service";
import {Constants} from "../constants/constants";
import {CookieUtil} from "../util/cookie.util";

@Injectable()
export class AuthGuard implements CanActivate{
    constructor(private authService: AuthService, private router: Router,private http: HttpService) {}

    canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Promise<boolean> {
      let url: string = state.url;

      return this.checkLogin(url);
    }

    checkLogin(url: string): Promise<boolean> {
      var data = {
        username: CookieUtil.getCookie('USERNAME'),
        sessionid: CookieUtil.getCookie('SESSION_ID'),
        token: CookieUtil.getCookie('TOKEN'),
        rememberme: CookieUtil.getCookie('REMEMBERME') == '1'
      };
      return this.http.post(Constants.url + '/datainfo/user/checkLogin', data).toPromise().then(
        (result)=> {
          console.info('AuthGuard - checkLogin: ',result);
          if(result.success){
            CookieUtil.setCookie('TOKEN',result.token,7);
            if(url == '/login'){//如果是进登录页并且已经登陆l直接跳转首页
              this.router.navigate(['/homepage']);
            }
            return true;
          }else {
            CookieUtil.delCookie('SESSION_ID');
            CookieUtil.delCookie('TOKEN');
            // Store the attempted URL for redirecting
            this.authService.redirectUrl = url == '/login' ? '/homepage' : url;

            // Navigate to the login page with extras
            if(url != '/login') {
              this.router.navigate(['/login']);
            }else{
              return true;//如果是登陆直接跳转
            }
            return false;
          }
        },
        (error)=> {
          // Store the attempted URL for redirecting
          this.authService.redirectUrl = url == '/login' ? '/homepage' : url;

          // Navigate to the login page with extras
          if(url != '/login') {
            this.router.navigate(['/login']);
          }else{
            return true;//如果是登陆直接跳转
          }
          console.info(error);
          return false;
        });
    }

}
