import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';

@Component({
  selector: 'app-medicine-detail',
  templateUrl: './medicine-detail.component.html',
  styleUrls: ['./medicine-detail.component.scss']
})
export class MedicineDetailComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit() {
  }

  gotoChoosed(){

  }
  gotoScreening() {
    this.router.navigateByUrl('/search-result');
  }
}
