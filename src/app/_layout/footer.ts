import { Component, OnInit } from '@angular/core';
import { environment } from '../../environments/environment';
// import {DataCategoryService} from "../dataEntries/services/data-category.service";
// import {DataCategory} from '../home/data-category';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.html',
  styleUrls: [
    './footer.scss'
  ]
})
export class LayoutFooterComponent implements OnInit {
  appServiceAddress;
  modelsAddress;
  cecyun;
  mainPage;
  comingSoonAddress;
  userIssue;
  userGuide;
  // //dataCategories = ['健康医疗', '政务公开', '科学研究', '环境气候', '国民经济', '公共安全', '商业贸易', '金融财经'];
  // modelCategories = ['行业管理', '行业治理', '决策支持', '健康管理', '临床支持', '产业创新'];
  // appsCategories = [
  //   {name: '行业管理', url: 'product/c1001.html'},
  //   {name: '行业治理', url: 'product/c1002.html'},
  //   {name: '决策支持', url: 'product/c1003.html'},
  //   {name: '健康管理', url: 'product/c1004.html'},
  //   {name: '临床支持', url: 'product/c1005.html'},
  //   {name: '产业创新', url: 'product/c1006.html'}];
  // dataCategories: DataCategory[];

  constructor() {
  }

  ngOnInit() {
    // this.appServiceAddress = environment.domainConfig.appService;
    // this.modelsAddress = environment.domainConfig.models;
    // this.cecyun = environment.domainConfig.cecYun;
    // this.mainPage = environment.domainConfig.main;
    // this.comingSoonAddress = environment.domainConfig.main + 'coming_soon';
    // this.userIssue = environment.domainConfig.main + 'user_issue';
    // this.userGuide = environment.domainConfig.main + 'user_guide';
    // this.dataCategoryService.getAll().subscribe(categories =>{
    //   this.dataCategories = categories;
    // })
  }

  // gotoAppStore(category) {
  //   let targetUrl = this.appServiceAddress + category.url;
  //   return targetUrl;
  // }
  //
  // gotoModels(category) {
  //   let targetUrl = this.modelsAddress + ';category=' + category;
  //   return targetUrl;
  // }


}
