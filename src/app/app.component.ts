import {Component} from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'Path Finder';

  checkIfUserIsLoggedIn(): boolean {
    return !!localStorage.getItem('userName');
  }
}
