import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';

@Component({
  selector: 'app-enterprise',
  templateUrl: './enterprise.component.html',
  styleUrls: ['./enterprise.component.scss']
})
export class EnterpriseComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit() {

  }

  toDataSet(type) {
    this.router.navigateByUrl('/data-set/' + type);
  }
}
