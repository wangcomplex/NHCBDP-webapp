import {Injectable} from '@angular/core';
import {Http} from '@angular/http';
import {Observable} from 'rxjs/Observable';
import {Md5} from 'ts-md5/dist/md5';

@Injectable()
export class LoginService {

  username: string;

    constructor(private http: Http) {
    }

    login(form: any): Observable<any> {
        return this.http.get(`/api/webModule/user/login?userName=${form.username}&password=${Md5.hashStr(form.password)}`);
    }
    register(form: any): Observable<any> {
        return this.http.get(`/api/webModule/user/register?userName=${form.username}&password=${Md5.hashStr(form.password)}`);
        // return this.http.post(`/webModule/user/register`, {username: form.username, password: Md5.hashStr(form.password)});
  }
}
