import {Component, ElementRef,  OnInit,  ViewChild} from '@angular/core';
import * as echarts from 'echarts';
import ECharts = echarts.ECharts;


@Component({
    selector: 'app-show-line',
    templateUrl: './show-line.html',
    styleUrls: ['./show-line.scss']
})

export class ShowLineComponent implements OnInit  {

  @ViewChild('canvas')
  canvas: ElementRef;

  constructor() {
  }

  ngOnInit() {
    echarts.dispose(this.canvas.nativeElement);
    const chart = echarts.init(this.canvas.nativeElement);
    chart.setOption(this.getOption());
  }

  getOption(): any {
    return {
      title : {
        text: '全国医疗卫生机构住院量及增长速度',
      },
      tooltip : {
        trigger: 'axis'
      },
      legend: {
        x: 'left',
        y: '5%',
        data: ['住院量', '增长速度']
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
          data : ['2012', '2013', '2014', '2015', '2016']
        }
      ],
      yAxis : [
        {
          type : 'value'
        }
      ],
      series : [
        {
          name: '住院量',
          type: 'bar',
          data: [68.9, 73.1, 76.0, 76.9, 79.3],
          markPoint : {
            data : [
              {type : 'max', name: '最大值'},
              {type : 'min', name: '最小值'}
            ]
          },
          markLine : {
            data : [
              {type : 'average', name: '平均值'}
            ]
          }
        },
        {
          name: '增长速度',
          type: 'line',
          data: [9.9, 6.1, 4.0, 1.2, 3.1],
          markPoint : {
            data : [
              {type : 'max', name: '最大值'},
              {type : 'min', name: '最小值'}
            ]
          },
          markLine : {
            data : [
              {type : 'average', name : '平均值'}
            ]
          }
        }
      ]
    };

  }


}

