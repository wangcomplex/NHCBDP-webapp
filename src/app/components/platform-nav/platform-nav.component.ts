import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';

@Component({
  selector: 'app-platform-nav',
  templateUrl: './platform-nav.component.html',
  styleUrls: ['./platform-nav.component.scss']
})
export class PlatformNavComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit() {
  }

  gotoApply() {
    this.router.navigateByUrl('/health-record');
  }
}
