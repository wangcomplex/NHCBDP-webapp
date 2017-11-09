import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';

@Component({
  selector: 'app-to-buy',
  templateUrl: './to-buy.component.html',
  styleUrls: ['./to-buy.component.scss']
})
export class ToBuyComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit() {
  }
  gotoBuy() {
    this.router.navigateByUrl('/order-detail');
  }
}
