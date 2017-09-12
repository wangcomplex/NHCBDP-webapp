import {Routes} from '@angular/router';
import {HomeComponent} from './home/home.component';
import {LoginComponent} from './login/login.component';
import {ApplyForComponent} from './components/apply-for/apply-for.component';
import {RegisterComponent} from './login/register';
import {AuditingComponent} from './components/auditing/auditing.component';
import {PlatformNavComponent} from './components/platform-nav/platform-nav.component';
import {HealthRecordComponent} from './components/health-record/health-record.component';

export const ROUTES: Routes = [
  {
    path: '',
    pathMatch: 'full',
    redirectTo: '/login'
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
    path: 'home',
    component: HomeComponent,
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
];
