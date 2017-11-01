import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {Cities, Provinces} from '../map/province-city';

@Component({
  selector: 'app-data-cartogram',
  templateUrl: './data-cartogram.component.html',
  styleUrls: ['./data-cartogram.component.scss']
})
export class DataCartogramComponent implements OnInit {
  provinces = Provinces;
  cities = Cities;
  mapType = '';
  parent = '';
  data = [];

  flag01 = true;
  flag02 = false;
  flag03 = false;
  flag04 = false;
  flag05 = false;
  selectedType;

  constructor(private router1: ActivatedRoute) {
  }

  ngOnInit() {
    this.router1.params.subscribe(params => {
      this.selectedType = params['type'];
      this.showContent(parseInt(this.selectedType));
    });
    this.mapType = 'china';
    this.data = this.provinces;
  }

  reset(event) {
    this.data = event.mapType !== 'china' ? this.cities : this.provinces;
    this.mapType = event.mapType;
    this.parent = (event.parent == null) ? 'china' : event.parent;
  }

  showContent(type) {
    this.initFlag();
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
    }


  }

  initFlag() {
    this.flag01 = false;
    this.flag02 = false;
    this.flag03 = false;
    this.flag04 = false;
    this.flag05 = false;
  }

  getStyle(flag) {
    if (flag) {
      return {
        background: '#ccc'
      };
    }
  }

}
