import {Component, ElementRef,  OnInit,  ViewChild} from '@angular/core';
import * as echarts from 'echarts';
import ECharts = echarts.ECharts;
import {DataService} from '../../../services/data.service';


@Component({
    selector: 'app-show-line',
    templateUrl: './show-line.html',
    styleUrls: ['./show-line.scss']
})

export class ShowLineComponent implements OnInit  {

  @ViewChild('canvas')
  canvas: ElementRef;

  constructor(private dataService: DataService) {
  }

  ngOnInit() {
    this.dataService.getZyspeedData().subscribe(response => {
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
        text: '全国医疗卫生机构住院量及增长速度',
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
          data : ['2012', '2013', '2014', '2015', '2016']
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

