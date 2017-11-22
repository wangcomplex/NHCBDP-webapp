import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';

@Component({
  selector: 'app-auditing',
  templateUrl: './auditing.component.html',
  styleUrls: ['./auditing.component.scss']
})
export class AuditingComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit() {
  }

  technology() {
  }
  law() {
  }

  done() {
  }

  gotoBuy() {
    this.router.navigateByUrl('/order-detail');
  }
}
