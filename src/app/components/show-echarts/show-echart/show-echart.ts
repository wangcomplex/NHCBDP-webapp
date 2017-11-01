import {Component, ElementRef, OnInit, ViewChild} from '@angular/core';
import * as echarts from 'echarts';
import ECharts = echarts.ECharts;


@Component({
  selector: 'app-show-echart',
  templateUrl: './show-echart.html',
  styleUrls: ['./show-echart.scss']
})

export class ShowEchartComponent implements OnInit {

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
     backgroundColor: '#2c343c',
     title: {
       text: '全国丙类传染病发病以及死亡数',
       x: 'center',
       top: '3%',
       textStyle: {
         color: '#fff'
       }
     },
     tooltip: {
       trigger: 'axis'
     },
     legend: {
       x: 'center',
       data: ['流行性感冒', '流行性腮腺炎', '急性出血性结膜炎', '感染性腹泻病', '手足口病']
     },
     radar: [
       {
         indicator: [
           {text: '流行性感冒', max: 500000},
           {text: '流行性腮腺炎', max: 300000},
           {text: '急性出血性结膜炎', max: 50000},
           {text: '感染性腹泻病', max: 1500000},
           {text: '手足口病', max: 3300000}
         ],
         radius: 80,
         center: ['50%', '60%'],
       }
     ],
     series: [
       {
         type: 'radar',
         radarIndex: 0,
         data: [
           {
             value: [195723, 182833, 34576, 937616, 1997371],
             name: '2015'
           },
           {
             value: [306682, 175001, 34253, 1018605, 2442138],
             name: '2016'
           }
         ]
       }
     ]
   };

 }
}


