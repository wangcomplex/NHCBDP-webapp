import {HomeComponent} from './home/home.component';
import {LoginComponent} from './login/login.component';
import {LayoutFooterComponent} from './_layout/footer';
import {ApplyForComponent} from './components/apply-for/apply-for.component';
import {HeaderComponent} from './_layout/header';
import {LoginService} from './services/login.service';
import {RegisterComponent} from './login/register';
import {AuditingComponent} from './components/auditing/auditing.component';
import {ApplyForAuditService} from './services/applyForAudit.service';
import {LayoutHeaderComponent} from './_layout/layout-header';
import {PlatformNavComponent} from './components/platform-nav/platform-nav.component';
import {HealthRecordComponent} from './components/health-record/health-record.component';

export const COMPONENT_PROVIDERS = [
    LoginComponent,
    HomeComponent,
    HeaderComponent,
    LayoutHeaderComponent,
    LayoutFooterComponent,
    ApplyForComponent,
    RegisterComponent,
    AuditingComponent,
    PlatformNavComponent,
    HealthRecordComponent,
];
export const PIPE_PROVIDERS = [

];

export const SERVICE_PROVIDERS = [
    LoginService,
    ApplyForAuditService
];
