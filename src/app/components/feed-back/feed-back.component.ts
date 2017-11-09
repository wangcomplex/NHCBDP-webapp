import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';

@Component({
  selector: 'app-feed-back',
  templateUrl: './feed-back.component.html',
  styleUrls: ['./feed-back.component.scss']
})
export class FeedBackComponent implements OnInit {

  constructor(private router: Router ) { }

  ngOnInit() {
  }

  gotoExtraction() {
    this.router.navigateByUrl('/extraction-data');
  }
}
