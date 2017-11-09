import {Component, ElementRef,  OnInit,  ViewChild} from '@angular/core';
import * as echarts from 'echarts';
import ECharts = echarts.ECharts;
import {DataService} from '../../../services/data.service';


@Component({
    selector: 'app-show-result-pie',
    templateUrl: './show-result-pie.html',
    styleUrls: ['./show-result-pie.scss']
})

export class ShowResultPieComponent implements OnInit  {

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
    const source = ['60%', '60%'];
    return {
      title: {
        text: '人员分布'
      },
      tooltip: {
        trigger: 'item',
        formatter: '{b}: {c} ({d}%)'
      },
      legend: {
        type: 'scroll',
        orient: 'vertical',
        left: '10%',
        top: '7%',
        icon: 'roundRect',
        data: ['平均年龄', '心肌梗死', '随访周期', '停药率']
      },
      series: [
        {
          type: 'pie',
          data: [100],
          z: 2,
          top: '25%',
          radius: ['69%', '0%'],
          center: source,
          itemStyle: {
            normal: {
              color: '#fff',
            }
          },
          silent: true,
          labelLine: {
            normal: {
              show: false
            }
          }
        }, {
          type: 'pie',
          data: [100],
          z: 1,
          radius: ['70%', '0%'],
          center: source,
          itemStyle: {
            normal: {
              color: '#dbd7d6',
            }
          },
          silent: true,
          labelLine: {
            normal: {
              show: false
            }
          }
        }, {
          type: 'pie',
          data: [100],
          z: 4,
          radius: ['30%', '0%'],
          center: source,
          itemStyle: {
            normal: {
              color: '#fff',
            }
          },
          silent: true,
          labelLine: {
            normal: {
              show: false
            }
          }
        }, {
          type: 'pie',
          data: [100],
          z: 3,
          radius: ['31%', '0%'],
          center: source,
          itemStyle: {
            normal: {
              color: '#dbd7d6',
            }
          },
          silent: true,
          labelLine: {
            normal: {
              show: false
            }
          }
        },
        {
          type: 'pie',
          z: 4,
          radius: ['40%', '60%'],
          center: source,
          color: ['#6695ed', '#ff7f4e', '#87cefa', '#33cd31'],
          label: {
            normal: {
              show: false,
              position: 'center'
            },
            emphasis: {
              show: true,
              textStyle: {
                fontSize: '30',
                fontWeight: 'bold'
              }
            }
          },
          labelLine: {
            normal: {
              show: false
            }
          },
          data: [{
            value: 3661,
            name: '平均年龄'
          }, {
            value: 5713,
            name: '心肌梗死'
          }, {
            value: 17623,
            name: '随访周期'
          }, {
            value: 3299,
            name: '停药率'
          }]
        }]
    };
  }

}

