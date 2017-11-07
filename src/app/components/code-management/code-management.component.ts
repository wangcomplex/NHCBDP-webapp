import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-code-management',
  templateUrl: './code-management.component.html',
  styleUrls: ['./code-management.component.scss']
})
export class CodeManagementComponent implements OnInit {

  flag01 = true;
  // flag02 = false;
  // flag03 = false;
  // flag04 = false;
  // flag05 = false;
  selectedType;

  constructor(private router1: ActivatedRoute) {
  }

  ngOnInit() {
    this.router1.params.subscribe(params => {
      this.selectedType = params['type'];
      this.showContent(parseInt(this.selectedType));
    });
  }

  showContent(type) {
    this.initFlag();
    switch (type) {
      case 1: {
        this.flag01 = true;
        break;
      }
      // case 2: {
      //   this.flag02 = true;
      //   break;
      // }
      // case 3: {
      //   this.flag03 = true;
      //   break;
      // }
      // case 4: {
      //   this.flag04 = true;
      //   break;
      // }
      // case 5: {
      //   this.flag05 = true;
      //   break;
      // }
    }


  }

  initFlag() {
    this.flag01 = false;
    // this.flag02 = false;
    // this.flag03 = false;
    // this.flag04 = false;
    // this.flag05 = false;
  }

  getStyle(flag) {
    if (flag) {
      return {
        background: '#ccc'
      };
    }
  }

}
