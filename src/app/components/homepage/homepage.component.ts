/**
 * Created by Ciki_Flame on 2017/3/16.
 */
import {Component, OnInit} from '@angular/core';
import {AuthService} from "../../service/auth.service";
import {Router} from "@angular/router";

import '../../../third-part/owlcarousel/owl.carousel.min.js';
import {HttpService} from "../../service/http.service";
import {Constants} from "../../constants/constants";
import {CookieUtil} from "../../util/cookie.util";

declare var $ : any;

@Component({
    selector: 'homepage',
    templateUrl: 'homepage.component.html',
    styleUrls: [
        'homepage.component.css',
        '../../../third-part/owlcarousel/assets/owl.carousel.min.css',
        '../../../third-part/owlcarousel/assets/owl.theme.default.min.css'
    ]
})

export class HomepageComponent implements  OnInit{
    constructor(public authService: AuthService, public router: Router,public http: HttpService){
    }

    ngOnInit(): void {
        $('.owl-carousel').owlCarousel({
            center:true,
            items:1,
            loop:true,
            autoplay:500
        });
    }

    logout() {
      this.http.post(Constants.url + '/datainfo/user/logout', {username:CookieUtil.getCookie('USERNAME')}).subscribe(
        (result)=> {
          if(result.success){
            $('#LogoutModal').modal('hide');
            this.router.navigate(['/login']);
          }
        },
        (error)=> {
          console.info("error", error);
        }
      );
    }
}
