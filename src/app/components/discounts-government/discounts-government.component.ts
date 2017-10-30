import { Component, OnInit } from '@angular/core';
import {LoginService} from '../../services/login.service';
import {Router} from "@angular/router";

@Component({
  selector: 'app-discounts-government',
  templateUrl: './discounts-government.component.html',
  styleUrls: ['./discounts-government.component.scss']
})
export class DiscountsGovernmentComponent implements OnInit {

  authenticated = false;
  userName: string;
  constructor(private loginService: LoginService, private router: Router, ) { }

  ngOnInit() {
    this.authenticated = !!this.loginService.username;
    if (this.authenticated) {
      this.userName = this.loginService.username;
    }
  }

  logout() {
    this.loginService.username = null;
  }
  toDataSet(type) {
    this.router.navigateByUrl('/data-set/' + type);
  }

}
