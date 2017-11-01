import { Component, OnInit } from '@angular/core';
import {LoginService} from '../../services/login.service';

@Component({
  selector: 'app-user-state',
  templateUrl: './user-state.component.html',
  styleUrls: ['./user-state.component.scss']
})
export class UserStateComponent implements OnInit {

  authenticated = false;
  userName: string;
  constructor( private loginService: LoginService) { }

  ngOnInit() {
    this.authenticated = !!this.loginService.username;
    if (this.authenticated) {
      this.userName = this.loginService.username;
    }
  }

  logout() {
    this.loginService.username = null;
    this.authenticated = !!this.loginService.username;
  }

}
