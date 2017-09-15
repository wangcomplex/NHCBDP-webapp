import { Component, OnInit } from '@angular/core';
import {LoginService} from '../../services/login.service';

@Component({
  selector: 'app-data-govern',
  templateUrl: './data-govern.component.html',
  styleUrls: ['./data-govern.component.scss']
})
export class DataGovernComponent implements OnInit {
  authenticated = false;
  userName: string;
  constructor(private loginService: LoginService) { }

  ngOnInit() {
    this.authenticated = !!this.loginService.username;
    if (this.authenticated) {
      this.userName = this.loginService.username;
    }
  }

  logout() {
    this.loginService.username = null;
  }

}
