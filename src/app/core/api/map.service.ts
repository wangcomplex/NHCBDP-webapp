import {Injectable} from '@angular/core';
import {Observable} from 'rxjs/Observable';
import {HttpClient} from '@angular/common/http';


@Injectable()
export class MapService {

  constructor(private http: HttpClient) {
  }

  get(name: string): Observable<any> {
    return this.http.get(`assets/maps/${name}.json`);
  }

}
