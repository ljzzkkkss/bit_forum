/**
 * Created by ljzzkkkss on 2017/3/16.
 */
import {Component, OnInit} from '@angular/core';
import {AuthService} from "../../service/auth.service";
import {Router} from "@angular/router";
import {HttpService} from "../../service/http.service";
import {Constants} from "../../constants/constants";
import {CookieUtil} from "../../util/cookie.util";
import '../../../third-part/jquery/jquery.countTo.js';
import '../../../third-part/timeline/js/jquery.eeyellow.Timeline.js';
import '../../../third-part/owlcarousel/owl.carousel.min.js';


declare var $ : any;

@Component({
    selector: 'forums',
    templateUrl: 'forums.component.html',
    styleUrls: [
        'forums.component.css',
        '../../../third-part/timeline/css/jquery.eeyellow.Timeline.css'
    ]
})

export class FourmsComponent implements  OnInit{
    constructor(public authService: AuthService, public router: Router,public http: HttpService){
    }

    ngOnInit(): void {
        $('.VivaTimeline').vivaTimeline({
            carousel: true,
            carouselTime: 3000
        });
        $(window).scroll(function() {
            if ($(window).scrollTop() > 400) {
                $("#scrollUp").fadeIn(200);
            } else {
                $("#scrollUp").fadeOut(200);
            }
        });
    }

    scrollTop() : void{
        window.scrollTo(0,0);
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
