import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
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
  isShownWRITESQL = false;
  isShownSaved = false;
  showResult = false;

  tableHeaders = [];
  result = [];

  sqlTableHeaders = [];
  sqlResult = [];

  savedHeaders = [];
  savedResult = [];

  inputSql;

  tableName;
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

  constructor(private router1: ActivatedRoute, private dataService: DataService, private router: Router) {
  }

  ngOnInit() {
    this.router1.params.subscribe(params => {
      this.tableName = params['dataName'];
      this.dataService.getJDKAName(this.tableName).subscribe(response => {
        this.dimoTypes = response;
      });
    });

    this.getData();
  }

  previewData(dataSource) {
    if (dataSource === 'MySQL') {
      this.isShownMySQL = true;
    }
    if (dataSource === 'WRITESQL') {
      this.getSqlData();
    }
    if (dataSource === 'SAVED') {
      this.showSaved();
    }
  }

  getData() {
    this.dataService.getCECDataSample(this.tableName).subscribe(response => {
      this.tableHeaders = response.columns;
      this.result = response.val;
    });
  }

  getSqlData() {
    this.dataService.getCECSqlDataSample(this.inputSql).subscribe(response => {
      this.showResult = true;
      if (response.code === 500) {
        this.isShownWRITESQL = false;
      } else {
        this.sqlTableHeaders = response.colums;
        this.sqlResult = response.data;
        this.isShownWRITESQL = true;
      }
    });
  }


  getStyle() {
    const result = (this.tableHeaders.length * 150 + 2) + 'px';
    return {
      width: result
    };
  }


  save() {
    if (this.inputSql !== '' && this.inputSql !== undefined) {
      this.dataService.saveSQL(this.inputSql).subscribe(response => {
        if (response) {
          alert('保存成功');
        }
      });
    }
  }

  showSaved() {
    this.dataService.listSQL().subscribe(response => {
      this.savedResult = response.data;
      this.isShownSaved = true;
      console.log(response.data);
      console.log(response);
    });
  }

  enter() {
    this.router.navigateByUrl(`extraction-data`);
  }
}
