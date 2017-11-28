import { Component, OnInit } from '@angular/core';
import {DataService} from '../../services/data.service';
import {Router} from "@angular/router";

@Component({
  selector: 'app-data-table',
  templateUrl: './data-table.component.html',
  styleUrls: ['./data-table.component.scss']
})
export class DataTableComponent implements OnInit {

  dimoTypes = [];
  settings = {
    actions: {
      add: false,
      delete: false,
      edit: false
    },
    columns: {
      id: {
        title: 'ID'
      },
      name: {
        title: '数据表名'
      },
      chname: {
        title: '中文名称'
      },
      desc: {
        title: '描述'
      },
      operation: {
        title: '操作'
      },

    }
  };
  constructor(private dataService: DataService, private router: Router) { }

  ngOnInit() {
    this.dataService.getJDKA('0').subscribe(response => {
      this.dimoTypes = response.rows;
      this.dimoTypes.forEach(dimType => {
        dimType['operation'] = '预览';
      });
    });
  }

  rowSelect(event) {
    this.router.navigateByUrl(`data-detail/${event.data.name}`);
  }

}
