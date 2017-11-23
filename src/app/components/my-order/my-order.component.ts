import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-my-order',
  templateUrl: './my-order.component.html',
  styleUrls: ['./my-order.component.scss']
})
export class MyOrderComponent implements OnInit {

  flag00 = true;
  flag01 = false;
  flag02 = false;
  flag03 = false;
  constructor() { }

  ngOnInit() {
  }

  showContent(type) {
    this.initFlag();
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
    }


  }

  initFlag() {
    this.flag00 = false;
    this.flag01 = false;
    this.flag02 = false;
    this.flag03 = false;
  }

  getStyle(flag) {
    if (flag) {
      return {
        color: '#333'
      };
    }
  }
}
