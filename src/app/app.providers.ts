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
import {MapEchartComponent} from './components/show-echarts/map-echart/map-echart.component';
import {DataMedicineComponent} from './components/data-medicine/data-medicine.component';
import {ShowBarLineComponent} from './components/show-echarts/show-bar-line/show-bar-line';
import {CodeManagementComponent} from './components/code-management/code-management.component';
import {MedicalServiceComponent} from './components/medical-service/medical-service.component';
import {ToBuyComponent} from './components/to-buy/to-buy.component';
import {OrderDetailComponent} from './components/order-detail/order-detail.component';
import {FeedBackComponent} from './components/feed-back/feed-back.component';
import {ExtractionDataComponent} from './components/extraction-data/extraction-data.component';
import {ShowResultComponent} from './components/show-result/show-result.component';
import {ShowResultPieComponent} from './components/show-echarts/show-result-pie/show-result-pie';
import {DataDetailComponent} from './components/data-detail/data-detail.component';
import {DataTableComponent} from './components/data-table/data-table.component';
import {ChildrenDataComponent} from './components/children-data/children-data.component';
import {ChildrenHealthComponent} from './components/children-health/children-health.component';
import {SafeGuardComponent} from './components/safe-guard/safe-guard.component';
import {SeeDoctorComponent} from './components/see-doctor/see-doctor.component';
import {PaymentComponent} from './components/payment/payment.component';
import {PaySucceedComponent} from './components/pay-succeed/pay-succeed.component';
import {MyOrderComponent} from './components/my-order/my-order.component';

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
  MapComponent,
  MapEchartComponent,
  DataMedicineComponent,
  ShowBarLineComponent,
  CodeManagementComponent,
  MedicalServiceComponent,
  ToBuyComponent,
  OrderDetailComponent,
  FeedBackComponent,
  ExtractionDataComponent,
  ShowResultComponent,
  ShowResultPieComponent,
  DataDetailComponent,
  DataTableComponent,
  ChildrenDataComponent,
  ChildrenHealthComponent,
  SafeGuardComponent,
  SeeDoctorComponent,
  PaymentComponent,
  PaySucceedComponent,
  MyOrderComponent,


];
export const PIPE_PROVIDERS = [];

export const SERVICE_PROVIDERS = [
  LoginService,
  ApplyForAuditService,
  DataService
];
