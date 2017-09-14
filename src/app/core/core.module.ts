import {NgModule} from '@angular/core';
import {MapService} from './api/map.service';
import {HttpClientModule} from '@angular/common/http';

@NgModule({
  imports: [
    HttpClientModule,
  ],
  declarations: [],
  providers: [
    MapService,
  ]
})
export class CoreModule {
}
