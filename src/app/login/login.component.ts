import {Component, Input, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {LoginService} from '../services/login.service';
import {DataService} from "../services/data.service";

@Component({
    selector: 'app-login',
    templateUrl: './login.component.html',
    styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  flag01 = false;
  flag02 = false;
  flag03 = false;
  flag04 = false;
  flag05 = false;
  flag06 = false;
  flag07 = false;
  flag08 = false;

  @Input()
  type;

    form: any = {};
    error: string;
    submitting = '登陆';

    constructor(private router: Router, private loginService: LoginService, private dataService: DataService, private router1: ActivatedRoute) {
    }

    ngOnInit() {
      this.initFlag(this.type);
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
  initFlag(type) {
    switch (type) {
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

    }
  }

  getStyle(flag) {
    if (flag) {
      return {
        background: '#424A55',
        fontWeight: 'bold'
      };
    }
  }

  toDataSet(type) {
    this.router.navigateByUrl('/data-set/' + type);
  }






}
