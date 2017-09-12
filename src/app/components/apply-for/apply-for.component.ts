import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
import {ApplyForAuditService} from '../../services/applyForAudit.service';
import {ApplyForRequest} from './apply-for-request';

@Component({
  selector: 'app-apply-for',
  templateUrl: './apply-for.component.html',
  styleUrls: ['./apply-for.component.scss']
})
export class ApplyForComponent implements OnInit {

  form: any = {};
  submitted = false;
  submitInfo = 'default';
  applyForRequest = new ApplyForRequest;

  constructor(private router: Router, private applyForAuditService: ApplyForAuditService) { }

  ngOnInit() {
  }

  onSubmit() {
    // this.applyForAudit();
    this.router.navigateByUrl('/auditing');
  }

  applyForAudit() {
    // this.submitInfo = 'process';
    // this.applyForAuditService.createApply(this.applyForRequest).subscribe(
    //   response => {
    //     this.submitted = true;
    //     this.router.navigateByUrl('/auditing');
    //   },
    //   error => {
    //     this.submitInfo = 'error';
    //   }
    // );
  }

}
