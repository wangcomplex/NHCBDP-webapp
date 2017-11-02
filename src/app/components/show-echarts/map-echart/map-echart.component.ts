import {
  Component,
  ElementRef,
  EventEmitter,
  Input,
  OnChanges,
  OnInit,
  Output,
  SimpleChange,
  ViewChild
} from '@angular/core';
import * as echarts from 'echarts';
import {MapJson} from './province-city';
import {MapService} from '../../../core/api/map.service';
import {DataService} from '../../../services/data.service';

@Component({
  selector: 'app-map-echart',
  templateUrl: './map-echart.component.html',
  styleUrls: ['./map-echart.component.scss']
})
export class MapEchartComponent implements OnInit, OnChanges {

  @Input()
  mapType;

  @Input()
  parent;

  @Input()
  data;

  @ViewChild('canvas')
  canvas: ElementRef;

  @Output()
  emitValue: EventEmitter<{}> = new EventEmitter<{}>();

  constructor(private mapService: MapService, private dataService: DataService) {
  }

  ngOnInit() {
  }

  ngOnChanges(changes: { [propertyName: string]: SimpleChange }) {
    if (changes['mapType'] && this.mapType) {
      this.dataService.getMedregionData().subscribe(response => {
        const data = JSON.parse(response._body);
        const option = this.getOption(data);
        echarts.dispose(this.canvas.nativeElement);
        this.draw(option, this.mapType);
      });
    }
  }

  draw(option, mapType: string) {
    const myChart = echarts.init(this.canvas.nativeElement);
    this.mapService.get(mapType).subscribe(mapJson => {
      echarts.registerMap(mapType, mapJson);
      myChart.setOption(option);
    });
    const self = this;
    const mapJson = MapJson;

    document.oncontextmenu = function () {
      return false;
    };
    myChart.on('click', function (param) {
      if (param.name === '福州市') {
        window.location.assign('http://www.fuzhou.gov.cn/');
      } else {
        const pinyin = mapJson.filter(json => param.name.indexOf(json.name) >= 0)[0].pinyin;
        self.emitValue.emit({mapType: pinyin, parent: mapType});
      }


    });
    myChart.on('contextmenu', function () {
      self.emitValue.emit({mapType: self.parent});
    });
  }

  getOption(data) {
    return {
      title : {
        text: '医疗机构卫生数',
        x: 'center'
      },
      tooltip : {
        trigger: 'item'
      },
      legend: {
        orient: 'vertical',
        x: 'left',
        data: ['医疗机构卫生数']
      },
      dataRange: {
        min: 233,
        max: 100000,
        x: 'left',
        y: 'bottom',
        text: ['高', '低'],           // 文本，默认为数值文本
        calculable : true
      },
      toolbox: {
        show: true,
        orient : 'vertical',
        x: 'right',
        y: 'center',
        feature : {
          mark : {show: true},
          dataView : {show: true, readOnly: false},
          restore : {show: true},
          saveAsImage : {show: true}
        }
      },
      roamController: {
        show: true,
        x: 'right',
        mapTypeControl: {
          'china': true
        }
      },
      series : [
        {
          name: '医疗机构卫生数',
          type: 'map',
          mapType: 'china',
          roam: false,
          itemStyle: {
            normal: {label: {show: true}},
            emphasis: {label: {show: true}}
          },
          data: data
        }
      ]
    };
  }

}
