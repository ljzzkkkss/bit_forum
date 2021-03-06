/**
 * Created by ljzzkkkss on 2017/3/16.
 */
import {Component, OnInit} from '@angular/core';
import {AuthService} from "../../service/auth.service";
import {Router} from "@angular/router";

import '../../../third-part/owlcarousel/owl.carousel.min.js';
import {HttpService} from "../../service/http.service";
import {Constants} from "../../constants/constants";
import {CookieUtil} from "../../util/cookie.util";
import '../../../third-part/jquery/jquery.countTo.js';

declare var $ : any;

@Component({
    selector: 'navbar',
    templateUrl: 'navbar.component.html',
    styleUrls: [
        'navbar.component.css'
    ]
})

export class NavbarComponent implements  OnInit{
    private url : string;
    constructor(public authService: AuthService, public router: Router,public http: HttpService){
    }

    ngOnInit(): void {
        this.url = this.router.url;
        console.info(this.url)
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
