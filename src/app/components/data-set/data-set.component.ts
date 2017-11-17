import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
declare var jQuery: any;
import 'bootstrap-table';

@Component({
  selector: 'app-data-set',
  templateUrl: './data-set.component.html',
  styleUrls: ['./data-set.component.scss']
})
export class DataSetComponent implements OnInit{

  bValue = 754;

  data;

  flag00 = true;
  flag01 = false;
  flag02 = false;
  flag03 = false;
  flag04 = false;
  flag05 = false;
  flag06 = false;
  flag07 = false;
  flag08 = false;
  flag09 = false;
  flag10 = false;
  flag11 = false;
  flag12 = false;
  flag13 = false;
  flag14 = false;
  flag15 = false;
  flag16 = false;
  flag17 = false;
  flag18 = false;
  flag19 = false;
  flag20 = false;

  resultCount = [754, 15, 15, 11, 6, 8, 10, 9, 8, 4, 7, 4, 12, 12, 5, 6, 3, 25, 36, 6, 17];

  selectedType;

  constructor(private router1: ActivatedRoute, private router: Router) {
  }

  ngOnInit() {
    this.router1.params.subscribe(params => {
      this.selectedType = params['type'];
      this.showContent(parseInt(this.selectedType));
    });
  }

  showContent(type) {
    this.initFlag();
    this.bValue = this.resultCount[type];
    switch (type) {
      case 0: {
        this.flag00 = true;
        break;
      }
      case 1: {
        this.flag01 = true;
        break;
      }
      case 2: {
        this.flag02 = true;
        break;
      }
      case 3: {
        this.flag03 = true;
        break;
      }
      case 4: {
        this.flag04 = true;
        break;
      }
      case 5: {
        this.flag05 = true;
        break;
      }
      case 6: {
        this.flag06 = true;
        break;
      }
      case 7: {
        this.flag07 = true;
        break;
      }
      case 8: {
        this.flag08 = true;
        break;
      }
      case 9: {
        this.flag09 = true;
        break;
      }
      case 10: {
        this.flag10 = true;
        break;
      }
      case 11: {
        this.flag11 = true;
        break;
      }
      case 12: {
        this.flag12 = true;
        break;
      }
      case 13: {
        this.flag13 = true;
        break;
      }
      case 14: {
        this.flag14 = true;
        break;
      }
      case 15: {
        this.flag15 = true;
        break;
      }
      case 16: {
        this.flag16 = true;
        break;
      }
      case 17: {
        this.flag17 = true;
        break;
      }
      case 18: {
        this.flag18 = true;
        break;
      }
      case 19: {
        this.flag19 = true;
        break;
      }
      case 20: {
        this.flag20 = true;
        break;
      }
    }


  }

  initFlag() {
    this.flag00 = false;
    this.flag01 = false;
    this.flag02 = false;
    this.flag03 = false;
    this.flag04 = false;
    this.flag05 = false;
    this.flag06 = false;
    this.flag07 = false;
    this.flag08 = false;
    this.flag09 = false;
    this.flag10 = false;
    this.flag11 = false;
    this.flag12 = false;
    this.flag13 = false;
    this.flag14 = false;
    this.flag15 = false;
    this.flag16 = false;
    this.flag17 = false;
    this.flag18 = false;
    this.flag19 = false;
    this.flag20 = false;
  }

  getStyle(flag) {
    if (flag) {
      return {
        background: '#ccc'
      };
    }
  }

  toDateCartogram() {
    this.router.navigateByUrl('/data-cartogram/1');
  }

  toDateMedicine() {
    this.router.navigateByUrl('/data-medicine/1');
  }

  toDateCode() {
    this.router.navigateByUrl('/code-management/1');
  }

  toMedicalService() {
    this.router.navigateByUrl('/medical-service/1');
  }


  toChildrenBorn() {
    this.router.navigateByUrl(`children-data`);
  }

  toChildrenHealth() {
    this.router.navigateByUrl(`children-health`);
  }

  toSafeGuard() {
    this.router.navigateByUrl(`safe-guard`);
  }

  toSeeDoctor() {
  this.router.navigateByUrl(`see-doctor`);
}



}
