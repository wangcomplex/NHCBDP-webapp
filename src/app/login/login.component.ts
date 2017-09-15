import {Component, OnInit} from '@angular/core';
import {Router} from '@angular/router';
import {LoginService} from '../services/login.service';

@Component({
    selector: 'app-login',
    templateUrl: './login.component.html',
    styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

    form: any = {};
    error: string;
    submitting = '登陆';

    constructor(private router: Router, private loginService: LoginService) {
    }

    ngOnInit() {
    }

    login() {
        this.submitting = '登陆中...';
        this.loginService.login(this.form).subscribe(response => {
                if (response.status === 200) {
                  this.loginService.username = this.form.username;
                  this.router.navigateByUrl('/home');
                }
            },
            error => {
              if (error.status === 401) {
                this.error = '用户名或密码错，请重新登录！';
              } else {
                this.error = `其他错误！${error.message}`;
              }
                this.submitting = '登陆';
            });
    }
}
