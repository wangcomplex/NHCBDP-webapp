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

}
