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
    RouterModule.forRoot(ROUTES),
  ],
  providers: [SERVICE_PROVIDERS, {provide: LocationStrategy, useClass: HashLocationStrategy}],
  bootstrap: [AppComponent]
})
export class AppModule { }
