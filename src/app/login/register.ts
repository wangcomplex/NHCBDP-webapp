import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
import {Http} from '@angular/http';
import {LoginService} from '../services/login.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.html',
  styleUrls: ['./register.scss'],
})
export class RegisterComponent implements OnInit {

  form: any = {};
  error: string;
  submitting = '注册';
  constructor(private router: Router, private http: Http, private loginService: LoginService) {
  }

  ngOnInit() {
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

}
