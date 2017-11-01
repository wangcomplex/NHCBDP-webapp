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
    // const option = {
    //   title: {
    //     text: '全国医院医疗大数据覆盖概括',
    //     textStyle: {
    //       color: '#333',
    //       fonSize: '16px'
    //     },
    //     left: '40%'
    //   },
    //   tooltip: {
    //     trigger: 'item',
    //     formatter: function (params) {
    //       switch (params.value) {
    //         case 0:
    //           return params.name + ': 全部覆盖';
    //         case 1:
    //           return params.name + ': 部分覆盖';
    //         case 2:
    //           return params.name + ': 未覆盖';
    //       }
    //     }
    //   },
    //   visualMap: {
    //     left: 'left',
    //     top: 'bottom',
    //     categories: [0, 1, 2],
    //     inRange: {
    //       color: ['#a3d1f8', '#b2d9fa', '#96caf6']
    //     },
    //     textStyle: {
    //       color: '#0d121f'
    //     },
    //     formatter: function (value) {
    //       switch (value) {
    //         case 0:
    //           return '全部覆盖';
    //         case 1:
    //           return '部分覆盖';
    //         case 2:
    //           return '未覆盖';
    //       }
    //     }
    //   },
    //   series: [{
    //     name: 'map',
    //     type: 'map',
    //     mapType: this.mapType,
    //     roam: false,
    //     selectedMode: 'single',
    //     showLegendSymbol: false,
    //     left: 'center',
    //     label: {
    //       normal: {
    //         show: true,
    //         color: '#000',
    //         fontSize: 10
    //       },
    //       emphasis: {
    //         show: true,
    //         color: '#000',
    //         fontSize: 14,
    //         fontStyle: 'oblique'
    //       }
    //     },
    //     itemStyle: {
    //       normal: {
    //         borderColor: '#000'
    //       },
    //       emphasis: {
    //         areaColor: '#ffb980'
    //       }
    //     },
    //     data: this.data
    //   }],
    // };
    // return option;

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
          data: [
            {name: '北京', value: 9973},
            {name: '天津', value: 5518},
            {name: '上海', value: 5075},
            {name: '重庆', value: 20135},
            {name: '河北', value: 79199},
            {name: '河南', value: 71474},
            {name: '云南', value: 24293},
            {name: '辽宁', value: 36088},
            {name: '黑龙江', value: 20431},
            {name: '湖南', value: 60917},
            {name: '安徽', value: 24536},
            {name: '山东', value: 78110},
            {name: '新疆', value: 18881},
            {name: '江苏', value: 32243},
            {name: '浙江', value: 31795},
            {name: '江西', value: 38262},
            {name: '湖北', value: 36350},
            {name: '广西', value: 34644},
            {name: '甘肃', value: 28349},
            {name: '山西', value: 42572},
            {name: '内蒙古', value: 24327},
            {name: '陕西', value: 36914},
            {name: '吉林', value: 20960},
            {name: '福建', value: 27723},
            {name: '贵州', value: 28178},
            {name: '广东', value: 49499},
            {name: '青海', value: 6346},
            {name: '西藏', value: 6848},
            {name: '四川', value: 80213},
            {name: '宁夏', value: 4282},
            {name: '海南', value: 5262},
            {name: '台湾', value: 2017},
            {name: '香港', value: 1024},
            {name: '澳门', value: 233}
          ]
        }
      ]
    };
  }

}
