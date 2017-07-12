/**
 * Created by Ciki_Flame on 2017/3/16.
 */
import {Component, OnInit} from '@angular/core';
import {AuthService} from "../../service/auth.service";
import {Router} from "@angular/router";

import '../../../third-part/owlcarousel/owl.carousel.min.js';
import {HttpService} from "../../service/http.service";
import '../../../third-part/jquery/jquery.countTo.js';
import '../../../third-part/jquery/wow.min.js';

declare var $ : any;
declare var WOW : any;

@Component({
    selector: 'homepage',
    templateUrl: 'homepage.component.html',
    styleUrls: [
        'homepage.component.css',
        '../../../third-part/css/animate.css',
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
        $('.countTo').countTo();
        $(window).scroll(function() {
            if ($(window).scrollTop() > 400) {
                $("#scrollUp").fadeIn(200);
            } else {
                $("#scrollUp").fadeOut(200);
            }
        });

        var wow = new WOW({
            animateClass: 'animated',
            offset: 120
        });
        wow.init();

    }

    scrollTop() : void{
        window.scrollTo(0,0);
    }

}
