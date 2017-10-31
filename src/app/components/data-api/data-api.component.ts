import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';

@Component({
  selector: 'app-data-api',
  templateUrl: './data-api.component.html',
  styleUrls: ['./data-api.component.scss']
})
export class DataApiComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit() {

  }

  toDataSet(type) {
    this.router.navigateByUrl('/data-set/' + type);
  }

}
