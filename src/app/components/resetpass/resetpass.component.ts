import {Component, OnInit} from '@angular/core';
import {Router, ActivatedRoute, Params} from '@angular/router';
import {HttpService} from "../../service/http.service";
import {Constants} from "../../constants/constants";
import {Md5} from "ts-md5/dist/md5";
import {CookieUtil} from "../../util/cookie.util";

declare var $ : any;

@Component({
  selector: 'login',
  templateUrl: 'resetpass.component.html',
  styleUrls: ['resetpass.component.css']
})
export class ResetPassComponent implements OnInit{
  private username : string;
  private password : string;
  private confirmPassword : string;

  ngOnInit(): void {
    this.route.params
      .switchMap((params: Params) => this.http.post(Constants.url + '/datainfo/user/checkresetpass', {token: params['token']}))
      .subscribe((result)=> {
          if(result.success){
            this.username = result.username;
            CookieUtil.setCookie('token',result.token,1800);
            $('#ResetPassModal').modal('show');
          }else{
            $('#MessageModal').modal('show');
          }
        },
        (error)=> {
          console.info("error", error);
        });
  }

  constructor( public router: Router,
               private route: ActivatedRoute,
               public http : HttpService) {
  }

  resetpass(modal: any) : void {
    var data = {
      username: this.username,
      password: Md5.hashStr(this.password).toString(),
      token: CookieUtil.getCookie("token")
    };
    this.http.post(Constants.url + '/datainfo/user/resetpass', data).subscribe(
      (result)=> {
        if(result.success){
          $(modal).modal('hide');
          $('#ConfirmModal').modal('show');
        }
      },
      (error)=> {
        console.info("error", error);
        this.router.navigate(['/login']);
      }
    );
  }

  login(): void{
    this.router.navigate(['/login']);
  }
}
