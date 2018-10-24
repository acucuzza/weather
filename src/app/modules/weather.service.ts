import { Injectable } from '@angular/core';
import { Http, Headers } from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()
export class WeatherService {
  zipcode: string;
  limit = 100;
   private headers = new Headers({
    'Content-Type': 'application/json'
  });
  constructor(private http: Http, zipcode: string) {
    this.zipcode = zipcode;
  }

  getWeather = (zip) => this.http.get(
    "api.openweathermap.org/data/2.5/weather?zip=" + zip + ",us@APPID=4353a91bee53716a65f4dc9ded3fbe84",
      { headers: this.headers }).map(x => {
        console.log(x.json());
        return x.json();
      })
}