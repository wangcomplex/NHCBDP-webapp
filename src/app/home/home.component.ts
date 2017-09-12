import {Component, OnInit} from '@angular/core';
import { Router } from '@angular/router';
import { Http } from '@angular/http';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})

export class HomeComponent implements OnInit {


  registerAddress: string;
  authenticated = false;
  userName: string;

  mainDomain: string;
  appServiceAddress: string;
  modelServiceAddress: string;
  comingSoonAddress: string;

  constructor(private router: Router, public http: Http, ) {
  }


  ngOnInit() {
    this.http.get('/user').subscribe(
      response => {
        if (response.json().name !== null) {
          this.userName = response.json().name;
          this.authenticated = true;
        } else {
          this.userName = 'N/A';
          this.authenticated = false;
        }
      },
      error => {
        this.userName = 'N/A';
        this.authenticated = false;
      }
    );

  }

  search(keyword: string) {
    this.router.navigate(['/openData/list', {keyword: keyword}]);
  }

  logout() {

  }

  navClick() {
    // this.dropDownMenuShow = !this.dropDownMenuShow;
  }


  gotoStructuring() {
    this.router.navigateByUrl('/platform-nav');
  }
}
