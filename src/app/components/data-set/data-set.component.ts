import {Component, OnInit} from '@angular/core';
import {LoginService} from '../../services/login.service';
import {Router, ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-data-set',
  templateUrl: './data-set.component.html',
  styleUrls: ['./data-set.component.scss']
})
export class DataSetComponent implements OnInit {


  authenticated = false;
  userName: string;

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

  selectedType;

  constructor(private loginService: LoginService, private router: ActivatedRoute) {
  }

  ngOnInit() {
    this.router.params.subscribe(params => {
      this.selectedType = params['type'];
      this.showContent(parseInt(this.selectedType));
    });
    this.authenticated = !!this.loginService.username;
    if (this.authenticated) {
      this.userName = this.loginService.username;
    }
  }

  logout() {
    this.loginService.username = null;
  }

  showContent(type) {
    this.initFlag();
    this.bValue = this.resultCount[type];
    switch (type) {
      case 0: {
        this.flag00 = true;
        break;
      }
      case 1: {
        this.flag01 = true;
        break;
      }
      case 2: {
        this.flag02 = true;
        break;
      }
      case 3: {
        this.flag03 = true;
        break;
      }
      case 4: {
        this.flag04 = true;
        break;
      }
      case 5: {
        this.flag05 = true;
        break;
      }
      case 6: {
        this.flag06 = true;
        break;
      }
      case 7: {
        this.flag07 = true;
        break;
      }
      case 8: {
        this.flag08 = true;
        break;
      }

    }


  }

  initFlag() {
    this.flag00 = false;
    this.flag01 = false;
    this.flag02 = false;
    this.flag03 = false;
    this.flag04 = false;
    this.flag05 = false;
    this.flag06 = false;
    this.flag07 = false;
    this.flag08 = false;
  }

  getStyle(flag) {
    if (flag) {
      return {
        background: '#ccc'
      };
    }
  }


}
