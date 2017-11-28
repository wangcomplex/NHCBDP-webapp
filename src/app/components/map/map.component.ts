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
import {MapService} from '../../core/api/map.service';

@Component({
  selector: 'app-map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.scss']
})
export class MapComponent implements OnInit, OnChanges {

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

  constructor(private mapService: MapService) {
  }

  ngOnInit() {
  }

  ngOnChanges(changes: { [propertyName: string]: SimpleChange }) {
    if (changes['mapType'] && this.mapType) {
      this.initData();
      const option = this.getOption();
      echarts.dispose(this.canvas.nativeElement);
      this.draw(option, this.mapType);
    }
  }

  initData() {
    for (let i = 0; i < this.data.length; i++) {
      const value = Math.round(Math.random() * 2);
      this.data[i]['value'] = value;
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

  getOption() {
    const option = {
      title: {
        text: '全国医院医疗大数据覆盖概括',
        textStyle: {
          color: '#333',
          fonSize: '16px'
        },
        left: '40%',
        top: '5%',
      },
      tooltip: {
        trigger: 'item',
        formatter: function (params) {
          switch (params.value) {
            case 0:
              return params.name + ': 全部覆盖';
            case 1:
              return params.name + ': 部分覆盖';
            case 2:
              return params.name + ': 未覆盖';
          }
        }
      },
      visualMap: {
        left: 'left',
        top: 'bottom',
        categories: [0, 1, 2],
        inRange: {
          color: ['#a3d1f8', '#b2d9fa', '#96caf6']
        },
        textStyle: {
          color: '#0d121f'
        },
        formatter: function (value) {
          switch (value) {
            case 0:
              return '全部覆盖';
            case 1:
              return '部分覆盖';
            case 2:
              return '未覆盖';
          }
        }
      },
      series: [{
        name: 'map',
        type: 'map',
        mapType: this.mapType,
        roam: false,
        selectedMode: 'single',
        showLegendSymbol: false,
        left: 'center',
        label: {
          normal: {
            show: true,
            color: '#000',
            fontSize: 10
          },
          emphasis: {
            show: true,
            color: '#000',
            fontSize: 14,
            fontStyle: 'oblique'
          }
        },
        itemStyle: {
          normal: {
            borderColor: '#000'
          },
          emphasis: {
            areaColor: '#ffb980'
          }
        },
        data: this.data
      }],
    };
    return option;
  }

}
