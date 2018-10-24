import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomepageComponent } from './views/homepage/homepage.component';

const routes: Routes = [
  {path: '', redirectTo: 'homepage', pathMatch: 'full'},
  {path: 'homepage', component: HomepageComponent},
  {path: 'weather', loadChildren: './modules/weather.module#WeatherModule'},
];

@NgModule({
  declarations: [],
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
