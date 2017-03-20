/**
 * Created by Ciki_Flame on 2017/3/16.
 */
import { Component } from '@angular/core';
import {AuthService} from "../../service/auth.service";
import {Router} from "@angular/router";

declare var $ : any;

@Component({
    selector: 'homepage',
    templateUrl: 'homepage.component.html',
    styleUrls: ['homepage.component.css']
})
export class HomepageComponent {
  constructor(public authService: AuthService, public router: Router){

  }

  logout() {
    this.authService.logout();
    $('#LogoutModal').modal('hide');
    window.localStorage.removeItem('bit_forum_islogin');
    this.router.navigate(['/login']);
  }
}
