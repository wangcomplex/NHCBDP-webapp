import { Input, Component, OnInit, Output, EventEmitter } from '@angular/core';
import { environment } from '../../environments/environment';
import { Http} from '@angular/http';

// const logoutAddress = environment.domainConfig.logoutAddress;

@Component({
  selector: 'app-header',
  templateUrl: './header.html',
  styleUrls: [
    './header.scss'
  ],
})
export class HeaderComponent implements OnInit {
  @Input() placeholder;
  @Output() dosearch: EventEmitter<string> = new EventEmitter<string>();

  mainDomain: string;
  searchValue: string;
  registerAddress: string;
  authenticated = false;
  userName: string;

  appServiceAddress: string;
  modelServiceAddress: string;
  comingSoonAddress: string;
  dropDownMenuShow = false;

  constructor() {
  }

  ngOnInit() {
    // this.registerAddress = environment.domainConfig.registerAddress;
    // this.mainDomain = environment.domainConfig.main;
    // this.appServiceAddress = environment.domainConfig.appService;
    // this.modelServiceAddress = environment.domainConfig.models;
    // this.comingSoonAddress = environment.domainConfig.main + 'coming_soon';

  //   this.http.get('/user').subscribe(
  //     response => {
  //       if (response.json().name !== null) {
  //         this.userName = response.json().name;
  //         this.authenticated = true;
  //       } else {
  //         this.userName = "N/A";
  //         this.authenticated = false;
  //       }
  //     },
  //     error => {
  //       this.userName = "N/A";
  //       this.authenticated = false;
  //     }
  //   );
   }
  //
  // logout() {
  //   this.http.post('/logout', {}).subscribe(
  //     response => {
  //       this.authenticated = false;
  //       location.href = logoutAddress;
  //     },
  //     error => {
  //       this.authenticated = false;
  //     }
  //   )
  // }

  // navClick() {
  //   this.dropDownMenuShow = !this.dropDownMenuShow;
  // }
  //
  // search(term: string) {
  //   this.searchValue = term;
  //   this.dosearch.emit(this.searchValue);
  // }
}
