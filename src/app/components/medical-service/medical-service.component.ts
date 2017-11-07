import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-medical-service',
  templateUrl: './medical-service.component.html',
  styleUrls: ['./medical-service.component.scss']
})
export class MedicalServiceComponent implements OnInit {

  flag01 = true;

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

    }


  }

  initFlag() {
    this.flag01 = false;
  }

  getStyle(flag) {
    if (flag) {
      return {
        background: '#ccc'
      };
    }
  }

}
