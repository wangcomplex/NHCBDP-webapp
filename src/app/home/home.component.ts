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

  bValue = 3558;

  flag00 = true;
  flag01 = false;
  flag02 = false;
  flag03 = false;
  flag04 = false;
  flag05 = false;
  flag06 = false;
  flag07 = false;
  flag08 = false;

  resultCount = [3558, 255, 182, 171, 161, 110, 80, 59, 200];


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
