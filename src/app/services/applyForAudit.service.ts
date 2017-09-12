import {Injectable} from '@angular/core';
import {Http, Response} from '@angular/http';
import {ApplyForRequest} from '../components/apply-for/apply-for-request';
import {Observable} from 'rxjs/Observable';

@Injectable()
export class ApplyForAuditService {

  constructor(private http: Http) {

  }

  createApply(applyForRequest: ApplyForRequest): Observable<Response> {
    return this.http.post('/back-end/data-entries', applyForRequest);
  }

  // get(id: number): Observable<DataEntryDto> {
  //   return this.http.get('/back-end/data-entries/' + id).map(response => {
  //     var json = response.json();
  //     return new DataEntryDto(json);
  //   });
  // }
  //
  // getAll(): Observable<DataEntryDto[]> {
  //   var list = [];
  //   return this.http.get('/back-end/data-entries').map(response => {
  //     var arrayJson = response.json();
  //     for (var i in arrayJson) {
  //       var json = arrayJson[i];
  //       list.push(new DataEntryDto(json));
  //
  //     }
  //     return list;
  //   });
  // }
  //
  // save(id: number, dataEntry: DataEntryDto): Observable<any> {
  //   return this.http.put('/back-end/data-entries/' + id, dataEntry);
  // }
  //
  // delete(array: number[]):Observable<any> {
  //   return this.http.post('/back-end/data-entries/delete', array);
  // }
  //
  // getArrayAsString(array: string[]): string {
  //   return array.join(' ');
  // }
  //
  // containsLinks(name: string, openDataDetail: DataEntryDto): boolean {
  //   return openDataDetail.links.some(link => link.name == name);
  // }

}

