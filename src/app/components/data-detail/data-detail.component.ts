import {Component, OnInit} from '@angular/core';
import {ActivatedRoute} from '@angular/router';
declare var jQuery: any;
import 'bootstrap-table';
import {DataService} from '../../services/data.service';

@Component({
  selector: 'app-data-detail',
  templateUrl: './data-detail.component.html',
  styleUrls: ['./data-detail.component.scss']
})
export class DataDetailComponent implements OnInit {

  isShownMySQL = false;
  tableHeaders = [];
  result = [];

  dimoTypes = [];
  settings = {
    actions: {
      add: false,
      delete: false,
      edit: false
    },
    columns: {
      name: {
        title: '字段名称'
      },
      type: {
        title: '字段类型'
      },
      default: {
        title: '默认'
      },
      desc: {
        title: '描述'
      },
      size: {
        title: '大小'
      },
      nullable: {
        title: '是否为空'
      },

    }
  };

  constructor(private router1: ActivatedRoute, private dataService: DataService) {
  }

  ngOnInit() {
    this.router1.params.subscribe(params => {
      this.dataService.getJDKAName(params['dataName']).subscribe(response => {
        this.dimoTypes = response;
      });
    });

    this.getData();
  }

  previewData(dataSource) {
    if (dataSource === 'MySQL') {
      this.isShownMySQL = true;
    }
  }

  getData() {
    this.dataService.getCECDataSample().subscribe(response => {
      this.tableHeaders = response.columns;
      this.result = response.val;
      console.log(this.tableHeaders);
      console.log(this.result);
    });
  }


  getStyle() {
    const result = (this.tableHeaders.length * 150 + 2) + 'px';
    return {
      width: result
    };
  }

}
