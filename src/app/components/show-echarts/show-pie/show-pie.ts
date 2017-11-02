import {Component, ElementRef,  OnInit,  ViewChild} from '@angular/core';
import * as echarts from 'echarts';
import ECharts = echarts.ECharts;
import {DataService} from '../../../services/data.service';


@Component({
    selector: 'app-show-pie',
    templateUrl: './show-pie.html',
    styleUrls: ['./show-pie.scss']
})

export class ShowpieComponent implements OnInit  {

  @ViewChild('canvas')
  canvas: ElementRef;

  constructor(private dataService: DataService) {
  }

  ngOnInit() {
    this.dataService.getMedcostData().subscribe(response => {
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
        text: '卫生总费用',
        left: 'center',
        top: 20,
        textStyle: {
          color: '#ccc'
        }
      },
      tooltip : {
        trigger: 'item',
        formatter: '{a} <br/>{b} : {c} ({d}%)'
      },
      legend: {
        left: '5%',
        bottom: 25,
        textStyle: {
          color: '#ccc'
        },
        data: dataName
      },
      visualMap: {
        show: false,
        min: 80,
        max: 600,
        inRange: {
          colorLightness: [0, 1]
        }
      },
      series : [
        {
          name: '访问来源',
          type: 'pie',
          radius : '55%',
          center: ['50%', '50%'],
          data: data.sort(function (a, b) { return a.value - b.value; }),
          roseType: 'radius',
          label: {
            normal: {
              textStyle: {
                color: 'rgba(255, 255, 255, 0.3)'
              }
            }
          },
          labelLine: {
            normal: {
              lineStyle: {
                color: 'rgba(255, 255, 255, 0.3)'
              },
              smooth: 0.2,
              length: 10,
              length2: 20
            }
          },
          itemStyle: {
            normal: {
              color: '#c23531',
              shadowBlur: 200,
              shadowColor: 'rgba(0, 0, 0, 0.5)'
            }
          },

          animationType: 'scale',
          animationEasing: 'elasticOut',
          animationDelay: function (idx) {
            return Math.random() * 200;
          }
        }
      ]
    };
  }

}

