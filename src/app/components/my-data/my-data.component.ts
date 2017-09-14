import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';

@Component({
  selector: 'app-my-data',
  templateUrl: './my-data.component.html',
  styleUrls: ['./my-data.component.scss']
})
export class MyDataComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit() {
  }

  gotoMyData() {
    this.router.navigateByUrl('/apply-for');
  }
}
