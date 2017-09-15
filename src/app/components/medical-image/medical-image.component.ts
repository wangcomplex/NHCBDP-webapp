import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';

@Component({
  selector: 'app-medical-image',
  templateUrl: './medical-image.component.html',
  styleUrls: ['./medical-image.component.scss']
})
export class MedicalImageComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit() {
  }

  gotoMyMedical() {
    this.router.navigateByUrl('/medicine-detail');
  }
}
