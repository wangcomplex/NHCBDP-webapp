import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';

@Component({
  selector: 'app-discounts-company',
  templateUrl: './discounts-company.component.html',
  styleUrls: ['./discounts-company.component.scss']
})
export class DiscountsCompanyComponent implements OnInit {

  constructor( private router: Router) { }

  ngOnInit() {
  }


  enterKnow() {
    this.router.navigateByUrl('/data-govern');
  }

}
