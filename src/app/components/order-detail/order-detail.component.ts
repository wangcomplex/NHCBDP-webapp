import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';

@Component({
  selector: 'app-order-detail',
  templateUrl: './order-detail.component.html',
  styleUrls: ['./order-detail.component.scss']
})
export class OrderDetailComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit() {
  }
  submitOrder() {
    this.router.navigateByUrl('/payment');
  }

}
