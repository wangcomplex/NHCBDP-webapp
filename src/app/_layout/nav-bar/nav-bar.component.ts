import {Component, Input, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.scss']
})
export class NavBarComponent implements OnInit {


  flag01 = false;
  flag02 = false;
  flag03 = false;
  flag04 = false;
  flag05 = false;
  flag06 = false;
  flag07 = false;
  flag08 = false;

  query;

  @Input()
  type;

  constructor(private router: Router, private router1: ActivatedRoute) {
  }

  ngOnInit() {
    this.initFlag(this.type);
  }

  initFlag(type) {
    switch (type) {
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

  getStyle(flag) {
    if (flag) {
      return {
        // background: '#424A55',
        color: '#1badd8',
        borderTop: '3px solid #1badd8',
        borderRadius: '0'
      };
    }
  }

  toDataSet(type) {
    this.router.navigateByUrl('/data-set/' + type);
  }

  search() {
    if (!!this.query) {
      window.location.assign(`http://10.1.11.109:9090/search?s=${this.query}&sign=1&pn=0`);
    }
  }
}
