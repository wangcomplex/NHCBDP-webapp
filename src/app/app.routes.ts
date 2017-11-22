import {Routes} from '@angular/router';
import {HomeComponent} from './home/home.component';
import {LoginComponent} from './login/login.component';
import {ApplyForComponent} from './components/apply-for/apply-for.component';
import {RegisterComponent} from './login/register';
import {AuditingComponent} from './components/auditing/auditing.component';
import {PlatformNavComponent} from './components/platform-nav/platform-nav.component';
import {HealthRecordComponent} from './components/health-record/health-record.component';
import {MyDataComponent} from './components/my-data/my-data.component';
import {MyMachineComponent} from './components/my-machine/my-machine.component';
import {MedicalImageComponent} from './components/medical-image/medical-image.component';
import {MedicineDetailComponent} from './components/medicine-detail/medicine-detail.component';
import {SearchResultComponent} from './components/search-result/search-result.component';
import {MyLaboratoryComponent} from './components/my-laboratory/my-laboratory.component';
import {EnterpriseComponent} from './components/enterprise/enterprise.component';
import {DiscountsGovernmentComponent} from './components/discounts-government/discounts-government.component';
import {DiscountsCompanyComponent} from './components/discounts-company/discounts-company.component';
import {DiscountsPeopleComponent} from './components/discounts-people/discounts-people.component';
import {DataGovernComponent} from './components/data-govern/data-govern.component';
import {AboutComponent} from './components/about/about.component';
import {DataSetComponent} from './components/data-set/data-set.component';
import {DataApiComponent} from './components/data-api/data-api.component';
import {DataCartogramComponent} from './components/data-cartogram/data-cartogram.component';
import {DataMedicineComponent} from './components/data-medicine/data-medicine.component';
import {ShowBarLineComponent} from './components/show-echarts/show-bar-line/show-bar-line';
import {CodeManagementComponent} from './components/code-management/code-management.component';
import {MedicalServiceComponent} from './components/medical-service/medical-service.component';
import {ToBuyComponent} from './components/to-buy/to-buy.component';
import {OrderDetailComponent} from './components/order-detail/order-detail.component';
import {FeedBackComponent} from './components/feed-back/feed-back.component';
import {ExtractionDataComponent} from './components/extraction-data/extraction-data.component';
import {ShowResultComponent} from './components/show-result/show-result.component';
import {DataDetailComponent} from './components/data-detail/data-detail.component';
import {ChildrenDataComponent} from './components/children-data/children-data.component';
import {ChildrenHealthComponent} from './components/children-health/children-health.component';
import {SafeGuardComponent} from './components/safe-guard/safe-guard.component';
import {SeeDoctorComponent} from './components/see-doctor/see-doctor.component';
import {PaymentComponent} from './components/payment/payment.component';
import {PaySucceedComponent} from './components/pay-succeed/pay-succeed.component';
import {MyOrderComponent} from './components/my-order/my-order.component';

export const ROUTES: Routes = [
  {
    path: '',
    pathMatch: 'full',
    redirectTo: '/home'
  },
  {
    path: 'home',
    component: HomeComponent,
  },
  {
    path: 'login',
    component: LoginComponent,
  },
  {
    path: 'register',
    component: RegisterComponent,
  },
  {
    path: 'apply-for',
    component: ApplyForComponent,
  },
  {
    path: 'auditing',
    component: AuditingComponent,
  },
  {
    path: 'platform-nav',
    component: PlatformNavComponent,
  },
  {
    path: 'health-record',
    component:  HealthRecordComponent,
  },
  {
    path: 'my-data',
    component:  MyDataComponent,
  },
  {
    path: 'my-machine',
    component:   MyMachineComponent,
  },
  {
    path: 'medical-image',
    component: MedicalImageComponent,
  },
  {
    path: 'medicine-detail',
    component: MedicineDetailComponent,
  },
  {
    path: 'search-result',
    component: SearchResultComponent,
  },
  {
    path: 'my-laboratory',
    component: MyLaboratoryComponent,
  },
  {
    path: 'enterprise',
    component: EnterpriseComponent,
  },
  {
    path: 'discounts-government',
    component: DiscountsGovernmentComponent,
  },
  {
    path: 'discounts-company',
    component: DiscountsCompanyComponent,
  },
  {
    path: 'discounts-people',
    component: DiscountsPeopleComponent,
  },
  {
    path: 'data-govern',
    component: DataGovernComponent,
  },
  {
    path: 'about',
    component: AboutComponent,
  },
  {
    path: 'data-set/:type',
    component: DataSetComponent,
  },
  {
    path: 'data-api',
    component: DataApiComponent,
  },
  {
    path: 'data-cartogram/:type',
    component: DataCartogramComponent,
  },
  {
    path: 'data-medicine/:type',
    component: DataMedicineComponent,
  },
  {
    path: 'show-bar-line',
    component: ShowBarLineComponent
  },
  {
    path: 'code-management/:type',
    component: CodeManagementComponent,
  },
  {
    path: 'medical-service/:type',
    component: MedicalServiceComponent,
  },
  {
    path: 'to-buy',
    component: ToBuyComponent,
  },
  {
    path: 'order-detail',
    component:  OrderDetailComponent,
  },
  {
    path: 'feed-back',
    component:  FeedBackComponent,
  },
  {
    path: 'extraction-data',
    component:  ExtractionDataComponent,
  },
  {
    path: 'show-result',
    component:  ShowResultComponent,
  },
  {
    path: 'data-detail/:dataName',
    component:  DataDetailComponent,
  },
  {
    path: 'children-data',
    component: ChildrenDataComponent,
  },
  {
    path: 'children-health',
    component: ChildrenHealthComponent,
  },
  {
    path: 'safe-guard',
    component: SafeGuardComponent
  },
  {
    path: 'see-doctor',
    component: SeeDoctorComponent,
  },
  {
    path: 'payment',
    component: PaymentComponent,
  },
  {
    path: 'pay-succeed',
    component: PaySucceedComponent,
  },
  {
    path: 'my-order',
    component: MyOrderComponent,
  },
];
