import {HomeComponent} from './home/home.component';
import {LoginComponent} from './login/login.component';
import {ApplyForComponent} from './components/apply-for/apply-for.component';
import {HeaderComponent} from './_layout/header';
import {LoginService} from './services/login.service';
import {RegisterComponent} from './login/register';
import {AuditingComponent} from './components/auditing/auditing.component';
import {ApplyForAuditService} from './services/applyForAudit.service';
import {LayoutHeaderComponent} from './_layout/layout-header';
import {PlatformNavComponent} from './components/platform-nav/platform-nav.component';
import {HealthRecordComponent} from './components/health-record/health-record.component';
import {MyDataComponent} from './components/my-data/my-data.component';
import {MyMachineComponent} from './components/my-machine/my-machine.component';
import {MapComponent} from './components/map/map.component';
import {MedicalImageComponent} from './components/medical-image/medical-image.component';
import {MedicineDetailComponent} from './components/medicine-detail/medicine-detail.component';
import {SearchResultComponent} from './components/search-result/search-result.component';
import {MyLaboratoryComponent} from './components/my-laboratory/my-laboratory.component';
import {FooterComponent} from './_layout/footer';
import {LayoutFooterComponent} from './_layout/layout-footer';
import {EnterpriseComponent} from './components/enterprise/enterprise.component';
import {DiscountsGovernmentComponent} from './components/discounts-government/discounts-government.component';
import {DiscountsCompanyComponent} from './components/discounts-company/discounts-company.component';
import {DiscountsPeopleComponent} from './components/discounts-people/discounts-people.component';
import {DataGovernComponent} from './components/data-govern/data-govern.component';
import {AboutComponent} from './components/about/about.component';
import {DataSetComponent} from './components/data-set/data-set.component';
import {DataApiComponent} from './components/data-api/data-api.component';
import {DataCartogramComponent} from './components/data-cartogram/data-cartogram.component';
import {ShowChartComponent} from './components/show-echarts/show-chart/show-chart';
import {ShowLineComponent} from './components/show-echarts/show-line/show-line';
import {ShowBarComponent} from './components/show-echarts/show-bar/show-bar';
import {ShowpieComponent} from './components/show-echarts/show-pie/show-pie';
import {ShowEchartComponent} from './components/show-echarts/show-echart/show-echart';
import {UserStateComponent} from './_layout/user-state/user-state.component';
import {NavBarComponent} from './_layout/nav-bar/nav-bar.component';
import {DataService} from './services/data.service';

export const COMPONENT_PROVIDERS = [
  LoginComponent,
  HomeComponent,
  HeaderComponent,
  FooterComponent,
  LayoutHeaderComponent,
  LayoutFooterComponent,
  ApplyForComponent,
  RegisterComponent,
  AuditingComponent,
  PlatformNavComponent,
  HealthRecordComponent,
  MyDataComponent,
  MyMachineComponent,
  MapComponent,
  MedicalImageComponent,
  MedicineDetailComponent,
  SearchResultComponent,
  MyLaboratoryComponent,
  EnterpriseComponent,
  DiscountsGovernmentComponent,
  DiscountsCompanyComponent,
  DiscountsPeopleComponent,
  DataGovernComponent,
  AboutComponent,
  DataSetComponent,
  DataApiComponent,
  DataCartogramComponent,
  ShowChartComponent,
  ShowLineComponent,
  ShowBarComponent,
  ShowpieComponent,
  ShowEchartComponent,
  UserStateComponent,
  NavBarComponent,
  MapComponent

];
export const PIPE_PROVIDERS = [];

export const SERVICE_PROVIDERS = [
  LoginService,
  ApplyForAuditService,
  DataService
];
