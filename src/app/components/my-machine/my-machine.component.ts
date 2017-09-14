import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
import {ApplyForRequest} from '../apply-for/apply-for-request';

@Component({
  selector: 'app-my-machine',
  templateUrl: './my-machine.component.html',
  styleUrls: ['./my-machine.component.scss']
})
export class MyMachineComponent implements OnInit {

  applyForRequest = new ApplyForRequest;
  constructor(private router: Router ) { }

  ngOnInit() {
  }

  gotoMyMachine() {
    this.router.navigateByUrl('/apply-for');
  }
}
