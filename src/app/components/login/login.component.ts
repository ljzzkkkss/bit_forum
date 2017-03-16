import { Component } from '@angular/core';
import { Router } from '@angular/router';
@Component({
  selector: 'login',
  templateUrl: 'login.component.html',
  styleUrls: ['login.component.css']
})
export class LoginComponent {

  constructor(private router: Router) {

  }

  doLogin(): void {
    this.router.navigate(['/homepage']);
  }
}
