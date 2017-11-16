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

  getJDKA(rowName: any): Observable<any> {
    return this.http.get(`/data/datasource/jkda/${rowName}`);
  }
}
