import { Component, OnInit } from '@angular/core';
import {LoginService} from '../../services/login.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-discounts-company',
  templateUrl: './discounts-company.component.html',
  styleUrls: ['./discounts-company.component.scss']
})
export class DiscountsCompanyComponent implements OnInit {

  authenticated = false;
  userName: string;
  constructor(private loginService: LoginService, private router: Router) { }

  ngOnInit() {
    this.authenticated = !!this.loginService.username;
    if (this.authenticated) {
      this.userName = this.loginService.username;
    }
  }

  logout() {
    this.loginService.username = null;
  }

  enterKnow() {
    this.router.navigateByUrl('/data-govern');
  }

  toDataSet(type) {
    this.router.navigateByUrl('/data-set/' + type);
  }

}
