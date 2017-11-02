import {Component, ElementRef, OnInit, ViewChild} from '@angular/core';
import * as echarts from 'echarts';
import ECharts = echarts.ECharts;
import {DataService} from "../../../services/data.service";


@Component({
  selector: 'app-show-echart',
  templateUrl: './show-echart.html',
  styleUrls: ['./show-echart.scss']
})

export class ShowEchartComponent implements OnInit {

  @ViewChild('canvas')
  canvas: ElementRef;

  constructor(private dataService: DataService) {
  }

  ngOnInit() {
    this.dataService.getInfectionData().subscribe(response => {
      const data = JSON.parse(response._body);
      const dataName = data.map(item => item.name);
      echarts.dispose(this.canvas.nativeElement);
      const chart = echarts.init(this.canvas.nativeElement);
      chart.setOption(this.getOption(data, dataName));
    });
  }
 getOption(data, dataName): any {
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
       top: '8%',
       textStyle: {
         color: '#fff'
       },
       data: dataName
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
         data: data
       }
     ]
   };

 }
}


