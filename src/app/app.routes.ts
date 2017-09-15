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
import {DiscountsCompanyComponent} from "./components/discounts-company/discounts-company.component";
import {DiscountsPeopleComponent} from "./components/discounts-people/discounts-people.component";

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
];
