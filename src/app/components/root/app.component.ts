import {Component} from "@angular/core";
import {Router} from "@angular/router";

@Component({
  selector: 'root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.css']
})

export class AppComponent {

  constructor(
      private router: Router
  ) {
  }

  login(): void {
    this.router.navigate(['/login']);
  }
}
