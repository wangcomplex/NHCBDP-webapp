import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
import {DataSourcesRequest} from './data-sources-request';
import {DataCategory} from '../data-category';


@Component({
  selector: 'app-health-record',
  templateUrl: './health-record.component.html',
  styleUrls: ['./health-record.component.scss']
})
export class HealthRecordComponent implements OnInit {

  isShownMySQL = false;
  isShownMongoDB = false;
  isShownHDFS = false;

  dataSourcesRequest: DataSourcesRequest = new DataSourcesRequest;
  categoryList: DataCategory[];
  constructor(private router: Router) { }

  ngOnInit() {
  }

  putInApply() {
    this.router.navigateByUrl('/apply-for');
  }

  previewData(dataSource) {
   if (dataSource === 'MySQL') {
     this.isShownMySQL = true;
   }
    if (dataSource === 'MongoDB') {
      this.isShownMongoDB = true;
    }
    if (dataSource === 'HDFS') {
      this.isShownHDFS = true;
    }
  }
}
