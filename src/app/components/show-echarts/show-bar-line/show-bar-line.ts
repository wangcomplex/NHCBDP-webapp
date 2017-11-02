import {Component, ElementRef, Input, OnInit, ViewChild} from '@angular/core';
import * as echarts from 'echarts';
import ECharts = echarts.ECharts;
import {DataService} from '../../../services/data.service';


@Component({
    selector: 'app-show-bar-line',
    templateUrl: './show-bar-line.html',
    styleUrls: ['./show-bar-line.scss']
})

export class ShowBarLineComponent implements OnInit  {

  @ViewChild('canvas')
  canvas: ElementRef;


  constructor(private dataService: DataService) {
  }

  ngOnInit() {
    this.dataService.getMedType2Data().subscribe(response => {
      const data = JSON.parse(response._body);
      const dataName = data.map(item => item.name);
      echarts.dispose(this.canvas.nativeElement);
      const chart = echarts.init(this.canvas.nativeElement);
      chart.setOption(this.getOption(data, dataName));
    });
  }

  getOption(data, dataName): any {
    return {
      title : {
        text: '统计人数及平均年龄'
      },
      tooltip : {
        trigger: 'axis'
      },
      legend: {
        x: 'left',
        y: '5%',
        data: dataName
      },
      toolbox: {
        show : true,
        feature : {
          dataView : {show: true, readOnly: false},
          magicType : {show: true, type: ['line', 'bar']},
          restore : {show: true},
          saveAsImage : {show: true}
        }
      },
      calculable : true,
      xAxis : [
        {
          type : 'category',
          data : ['赖诺普利', '福辛普利', '培哚普利', '依那普利', '贝那普利', '喹那普利', '雷米普利', '卡托普利']
        }
      ],
      yAxis : [
        {
          type : 'value'
        }
      ],
      series : data
    };

  }


}

