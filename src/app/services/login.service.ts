import {Injectable} from '@angular/core';
import {Http} from '@angular/http';
import {Router} from '@angular/router';
import {Observable} from 'rxjs/Observable';
import {Md5} from 'ts-md5/dist/md5';

@Injectable()
export class LoginService {

    constructor(private http: Http,  private router: Router) {
    }

    login(form: any): Observable<any> {
        return this.http.get(`/webModule/user/login?userName=${form.username}&password=${Md5.hashStr(form.password)}`);
    }
    register(form: any): Observable<any> {
        return this.http.get(`/webModule/user/register?userName=${form.username}&password=${Md5.hashStr(form.password)}`);
        // return this.http.post(`/webModule/user/register`, {username: form.username, password: Md5.hashStr(form.password)});
  }

    remove() {
        return this.http.get(`/webModule/user/logout`).subscribe(() => {
            this.router.navigateByUrl('/login');
        });
    }
}
