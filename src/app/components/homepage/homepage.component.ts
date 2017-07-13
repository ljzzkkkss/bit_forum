/**
 * Created by Ciki_Flame on 2017/3/16.
 */
import {Component, OnInit} from '@angular/core';
import {AuthService} from "../../service/auth.service";
import {Router} from "@angular/router";

import '../../../third-part/owlcarousel/owl.carousel.min.js';
import {HttpService} from "../../service/http.service";
import '../../../third-part/jquery/jquery.countTo.js';
import '../../../third-part/jquery/jquery.appear.js';
import WOW from 'wowjs';

declare var $ : any;

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
            items: 1,
            loop: true,
            lazyLoad: true,
            animateOut: 'slideOutDown',
            animateIn: 'flipInX',
            margin:30,
            stagePadding:30,
            smartSpeed:450,
            autoplay: true,
            autoplayTimeout: 300,
            autoplayHoverPause: true
        });

        (function() {
            var count = {
                initialized : false,
                initialize : function() {
                    if (this.initialized)
                        return;
                    this.initialized = true;
                    this.build();
                },
                build : function() {
                    this.animations();
                },
                animations : function() {
                    // Count To
                    $(".counters-item [data-to]").each(function() {
                        var $this = $(this);
                        $this.appear(function() {
                            $this.countTo({});
                        }, {
                            accX : 0,
                            accY : -150
                        });
                    });
                },
            };
            count.initialize();
        })();

        $(window).scroll(function() {
            if ($(window).scrollTop() > 400) {
                $("#scrollUp").fadeIn(200);
            } else {
                $("#scrollUp").fadeOut(200);
            }
        });

        var wow = new WOW.WOW({
            animateClass: 'animated',
            offset: 120
        });
        wow.init();

    }

    scrollTop() : void{
        window.scrollTo(0,0);
    }

}
