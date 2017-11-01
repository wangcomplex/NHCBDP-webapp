import {Component, ElementRef,  OnInit,  ViewChild} from '@angular/core';
import * as echarts from 'echarts';
import ECharts = echarts.ECharts;


@Component({
    selector: 'app-show-bar',
    templateUrl: './show-bar.html',
    styleUrls: ['./show-bar.scss']
})

export class ShowBarComponent implements OnInit  {

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
      tooltip : {
        trigger: 'axis',
        axisPointer : {            // 坐标轴指示器，坐标轴触发有效
          type : 'shadow'        // 默认为直线，可选为：'line' | 'shadow'
        }
      },
      legend: {
        right: '20%',
        data: ['公立医院', '民营医院', '社区卫生服务中心站', '乡镇卫生院', '村卫生室', '诊所（医务室）', '疾病预防控制中心', '专科疾病防治机构', '妇幼保健机构', '卫生计生监督机构']
      },
      toolbox: {
        show : true,
        feature : {
          dataView : {show: true, readOnly: false},
          magicType : {show: true, type: ['line', 'bar', 'stack', 'tiled']},
          restore : {show: true},
          saveAsImage : {show: true}
        }
      },
      grid: {
        left: '3%',
        right: '4%',
        bottom: '3%',
        containLabel: true
      },
      xAxis : [
        {
          type : 'category',
          data : ['2015', '2016']
        }
      ],
      yAxis : [
        {
          type : 'value'
        }
      ],
      series : [
        {
          name: '公立医院',
          type: 'bar',
          stack: '医院',
          data: [13069, 12708]
        },
        {
          name: '民营医院',
          type: 'bar',
          stack: '医院',
          data: [14518, 16432]
        },
        {
          name: '社区卫生服务中心站',
          type: 'bar',
          stack: '基层医疗卫生机构',
          data: [34321, 32327]
        },
        {
          name: '乡镇卫生院',
          type: 'bar',
          stack: '基层医疗卫生机构',
          data: [36817, 36795]
        },
        {
          name: '疾病预防控制中心',
          type: 'bar',
          stack: '专业公共卫生机构',
          data: [3478, 3481]
        },
        {
          name: '专科疾病防治机构',
          type: 'bar',
          stack: '专业公共卫生机构',
          data: [1234, 1213]
        },
        {
          name: '妇幼保健机构',
          type: 'bar',
          stack: '专业公共卫生机构',
          data: [3078, 3063]
        },
        {
          name: '卫生计生监督机构',
          type: 'bar',
          stack: '专业公共卫生机构',
          data: [2986, 2986]
        }
      ]
    };
  }


}

