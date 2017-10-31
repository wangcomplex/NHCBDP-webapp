import {Component, OnInit} from '@angular/core';
import { Router } from '@angular/router';
import { Http } from '@angular/http';
import {Cities, Provinces} from '../components/map/province-city';
import * as echarts from 'echarts';
import ECharts = echarts.ECharts;
import {LoginService} from '../services/login.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})

export class HomeComponent implements OnInit {

  authenticated = false;
  userName: string;
  currentPic = 0;

  provinces = Provinces;
  cities = Cities;
  mapType = '';
  parent = '';
  data = [];

  constructor(private router: Router, public http: Http, private loginService: LoginService) {
    setInterval(() => {
      const id = (this.currentPic + 1) % 4;
      this.currentPic = id;
    }, 3000 );
  }
  changebanner(id) {
    console.log(id);
    this.currentPic = id;
  }


  ngOnInit() {
    this.authenticated = !!this.loginService.username;
    if (this.authenticated) {
      this.userName = this.loginService.username;
    }
    this.mapType = 'china';
    this.data = this.provinces;
}
  reset(event) {
    this.data = event.mapType !== 'china' ? this.cities : this.provinces;
    this.mapType = event.mapType;
    this.parent = (event.parent == null) ? 'china' : event.parent;
  }


  gotoStructuring() {
    this.router.navigateByUrl('/platform-nav');
  }

  logout() {
    this.loginService.username = null;
  }


  toDataSet(type) {
    this.router.navigateByUrl('/data-set/' + type);
  }




}
