import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {COMPONENT_PROVIDERS, PIPE_PROVIDERS} from './app.providers';
import { AppComponent } from './app.component';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {ROUTES} from './app.routes';
import { HttpModule } from '@angular/http';
import { RouterModule } from '@angular/router';
import {SERVICE_PROVIDERS} from './app.providers';
import {HashLocationStrategy, LocationStrategy} from '@angular/common';
import {CustomFormsModule} from 'ng2-validation';
import {SelectModule} from './select/select.module';
import {MapService} from './core/api/map.service';
import {HttpClientModule} from '@angular/common/http';
import {ModalModule} from 'ng2-bootstrap';
import {Ng2SmartTableModule} from 'ng2-smart-table';

@NgModule({
  declarations: [
    AppComponent,
    ...COMPONENT_PROVIDERS,
    ...PIPE_PROVIDERS,

  ],
  imports: [
    BrowserModule,
    FormsModule,
    CustomFormsModule,
    ReactiveFormsModule,
    HttpModule,
    HttpClientModule,
    RouterModule.forRoot(ROUTES),
    SelectModule,
    ModalModule.forRoot(),
    Ng2SmartTableModule,
  ],
  providers: [
    SERVICE_PROVIDERS,
    {provide: LocationStrategy, useClass: HashLocationStrategy},
    MapService
    ],
  bootstrap: [AppComponent]
})
export class AppModule { }
