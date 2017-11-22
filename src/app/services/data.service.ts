import {Injectable} from '@angular/core';
import {Http} from '@angular/http';
import {Observable} from 'rxjs/Observable';

@Injectable()
export class DataService {

  username: string;

  constructor(private http: Http) {
  }

  getMahiData(): Observable<any> {
    return this.http.get('/data/api/bar/mahi');
  }

  getMedcostData(): Observable<any> {
    return this.http.get('/data/api/pie/medcost');
  }

  getZyspeedData(): Observable<any> {
    return this.http.get('/data/api/bar/zyspeed');
  }

  getMedregionData(): Observable<any> {
    return this.http.get('/data/api/map/medregion');
  }

  getInfectionData(): Observable<any> {
    return this.http.get('/data/api/radar/infectionC');
  }

  getMedTypeData(): Observable<any> {
    return this.http.get('/data/api/bar/med/type1');
  }

  getMedType2Data(): Observable<any> {
    return this.http.get('/data/api/bar/med/type2');
  }

  getJDKA(pageNum): Observable<any> {
    return this.http.get(`/data/datasource/jkda?limit=1500&offset=${pageNum}`).map(response => {
      return response.json();
    });
  }
  getJDKAName(rowName: any): Observable<any> {
    return this.http.get(`/data/datasource/jkda/${rowName}`).map(response => {
      return response.json();
    });
  }

  getCECDataJDKA(): Observable<any> {
    return this.http.get(`/data/datasource/cecdatajkda/cecd_child_health_001`).map(response => {
      return response.json();
    });
  }

  getCECDataJDKA2(): Observable<any> {
    return this.http.get(`/data/datasource/cecdatajkda/cecd_child_health_002`).map(response => {
      return response.json();
    });
  }

  getCECDataJDKA3(): Observable<any> {
    return this.http.get(`/data/datasource/cecdatajkda/cecd_child_health_003`).map(response => {
      return response.json();
    });
  }

  getCECDataJDKA4(): Observable<any> {
    return this.http.get(`/data/datasource/cecdatajkda/cecd_child_health_004`).map(response => {
      return response.json();
    });
  }

  getCECDataSample(tableName): Observable<any> {
    return this.http.get(`/data/datasource/jkda/${tableName}/sample`).map(response => {
      return response.json();
    });
  }
  getCECSqlDataSample(sql): Observable<any> {
    return this.http.get(`/data/datasource/jkda/sql?sql=${sql}`).map(response => {
      return response.json();
    });
  }

  saveSQL(sql): Observable<any> {
    return this.http.post(`/data/datasource/jkda/wbliu/sql?sql=${sql}`, '').map(response => {
      return response.json();
    });
  }

  listSQL(): Observable<any> {
    return this.http.get(`/data/datasource/sqls/wbliu`, '').map(response => {
      return response.json();
    });
  }
}
