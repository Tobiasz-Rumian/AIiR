import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  userName: string;

  constructor() {
  }

  ngOnInit() {
  }

  handleKeyPress(event) {
    if (event.key === 'Enter') {
      this.login();
    }
  }

  private login() {
    localStorage.setItem('userName', this.userName);
  }
}
