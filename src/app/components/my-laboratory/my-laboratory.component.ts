import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';

@Component({
  selector: 'app-my-laboratory',
  templateUrl: './my-laboratory.component.html',
  styleUrls: ['./my-laboratory.component.scss']
})
export class MyLaboratoryComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit() {
  }

  greatNew() {

  }

  extract() {
    this.router.navigateByUrl('/apply-for');
  }


}
