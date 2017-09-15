import { Component, OnInit } from '@angular/core';
import {LoginService} from '../../services/login.service';

@Component({
  selector: 'app-discounts-people',
  templateUrl: './discounts-people.component.html',
  styleUrls: ['./discounts-people.component.scss']
})
export class DiscountsPeopleComponent implements OnInit {

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
