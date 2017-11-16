import {Component, OnInit} from '@angular/core';
import {ActivatedRoute} from '@angular/router';
declare var jQuery: any;
import 'bootstrap-table';
import {DataService} from "../../services/data.service";
import {json} from "ng2-validation/dist/json";

@Component({
  selector: 'app-data-detail',
  templateUrl: './data-detail.component.html',
  styleUrls: ['./data-detail.component.scss']
})
export class DataDetailComponent implements OnInit {

  detail_url = '/data/datasource/jkda/';

  data = [];

  constructor(private router1: ActivatedRoute, private dataService: DataService) {
  }

  ngOnInit() {
    this.router1.params.subscribe(params => {
      const url = this.detail_url + params['dataName'];
      console.log(url);
      // jQuery('#table').attr('data-url', url);
      this.dataService.getJDKA(params['dataName']).subscribe(response => {
        jQuery('#table').bootstrapTable({
          method: 'get',
          dataType: 'json',
          cache: false,
          striped: true,
          sidePagination: 'server',
          url: url,
          search: true,
          pagination: true,
          showRefresh: true,
          showToggle: true,
          showColumns: true,
          height: 600 ,
          columns: [{
            field: 'name',
            title: '字段名称'
          }, {
            field: 'type',
            title: '字段类型'
          }, {
            field: 'desc',
            title: '描述'
          }, {
            field: 'nullable',
            title: '是否为空'
          }, {
            field: 'size',
            title: '大小'
          }, {
            field: 'default',
            title: '默认'
          }, ],
          data: JSON.parse(response._body)
        });
        console.log(JSON.parse(response._body));
        // this.data = JSON.parse(response._body);
      });
    });
  }

}
