import {Component, OnInit} from '@angular/core';
import {Router} from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  constructor(private router: Router) {
  }

  ngOnInit() {
  }

  getUserName() {
    return localStorage.getItem('userName');
  }

  goHome() {
    this.router.navigateByUrl('/');
  }

  logout() {
    localStorage.removeItem('userName');
    this.router.navigateByUrl('/');
  }
}
