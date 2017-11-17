import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {DataService} from '../../services/data.service';

@Component({
  selector: 'app-children-data',
  templateUrl: './children-data.component.html',
  styleUrls: ['./children-data.component.scss']
})
export class ChildrenDataComponent implements OnInit {

  showTable = false;
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
      desc: {
        title: '描述'
      },
      size: {
        title: '大小'
      },
      nullable: {
        title: '是否为空'
      },
      default: {
        title: '默认'
      },
    }
  };

  constructor(private router1: ActivatedRoute, private dataService: DataService) {
  }

  ngOnInit() {
    // this.router1.params.subscribe(params => {
      // this.dataService.getCECDataJDKA(params['dataName']).subscribe(response => {
      //   this.dimoTypes = response;
      //   console.log(response);
      // });
      this.showTable = false;
      this.dataService.getCECDataJDKA().subscribe(response => {
        this.dimoTypes = response;
        this.showTable = true;
        console.log(response);
      });
    // });
  }


}
