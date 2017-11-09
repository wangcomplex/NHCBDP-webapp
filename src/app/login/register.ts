import {Component, Input, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {Http} from '@angular/http';
import {LoginService} from '../services/login.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.html',
  styleUrls: ['./register.scss'],
})
export class RegisterComponent implements OnInit {

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
  submitting = '注册';
  constructor(private router: Router, private http: Http, private loginService: LoginService, private router1: ActivatedRoute) {
  }

  ngOnInit() {
    this.initFlag(this.type);
  }

  gotoRegister() {
    this.loginService.register(this.form).subscribe(response => {
        if (response.status === 200) {
          this.router.navigateByUrl('/login');
        }
      },
      error => {
        if (error.status === 401) {
          this.error = '密码必须是数字和字母组成，六位以上';
        } else {
          this.error = `其他错误！${error.message}`;
        }
        this.submitting = '注册';
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
