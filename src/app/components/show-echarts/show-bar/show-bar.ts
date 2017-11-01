import {Component, ElementRef,  OnInit,  ViewChild} from '@angular/core';
import * as echarts from 'echarts';
import ECharts = echarts.ECharts;
import {DataService} from '../../../services/data.service';


@Component({
    selector: 'app-show-bar',
    templateUrl: './show-bar.html',
    styleUrls: ['./show-bar.scss']
})

export class ShowBarComponent implements OnInit  {

  @ViewChild('canvas')
  canvas: ElementRef;

  constructor(private dataService: DataService) {
  }

  ngOnInit() {
    this.dataService.getMahiData().subscribe(response => {
      const data = JSON.parse(response._body);
      const dataName = data.map(item => item.name);
      echarts.dispose(this.canvas.nativeElement);
      const chart = echarts.init(this.canvas.nativeElement);
      chart.setOption(this.getOption(data, dataName));
    });
  }

  getOption(data, dataName): any {
    return {
      tooltip : {
        trigger: 'axis',
        axisPointer : {            // 坐标轴指示器，坐标轴触发有效
          type : 'shadow'        // 默认为直线，可选为：'line' | 'shadow'
        }
      },
      legend: {
        right: '20%',
        data: dataName
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
      series : data
    };
  }


}

