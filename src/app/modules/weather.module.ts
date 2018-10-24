import { NgModule, Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Http, HttpModule } from '@angular/http';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { BootstrapModalModule } from 'ng2-bootstrap-modal';

import { WeatherService } from './weather.service';
import { ForecastComponent } from './views/forecast/forecast.component';

const routes: Routes = [
  {path: '', redirectTo: 'forecast'},
  {path: 'forecast', component: ForecastComponent}
];

export function weatherfactory(http: Http){
  return new WeatherService(http, "19808");
}

@NgModule({
  declarations:[
    ForecastComponent
  ],
  imports: [
    CommonModule,
    HttpModule,
    FormsModule,
    BootstrapModalModule,
    RouterModule.forChild(routes)
  ],
  entryComponents: [ForecastComponent],
  providers: [{provide: WeatherService, useFactory: weatherfactory, deps: [Http]}],
  exports: [RouterModule]
})
export class WeatherModule { }