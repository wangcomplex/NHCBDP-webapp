import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';

@Component({
  selector: 'app-extraction-data',
  templateUrl: './extraction-data.component.html',
  styleUrls: ['./extraction-data.component.scss']
})
export class ExtractionDataComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit() {
  }

  gotoApply() {
    this.router.navigateByUrl('/apply-for');
  }

}
