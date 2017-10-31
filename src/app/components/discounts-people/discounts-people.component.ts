import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';

@Component({
  selector: 'app-discounts-people',
  templateUrl: './discounts-people.component.html',
  styleUrls: ['./discounts-people.component.scss']
})
export class DiscountsPeopleComponent implements OnInit {

  constructor( private router: Router) { }

  ngOnInit() {

  }


  toDataSet(type) {
    this.router.navigateByUrl('/data-set/' + type);
  }
}
