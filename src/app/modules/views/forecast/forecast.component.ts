
import { Component } from '@angular/core';
import { Http, Response, HttpModule } from '@angular/http';
import { FormsModule } from '@angular/forms';
// import { subscribe } from '@angular/'

@Component({
  selector: 'app-root',
  templateUrl: './forecast.component.html',
  styleUrls: ['./forecast.component.css']
})
export class ForecastComponent {

  constructor(private _http: Http) {}
  zipcode = "";
  cityName = "";
  description = "";
  temp;
  windspeed;
  high = "";
  low = "";

  searchCity() {
    this._http.get("http://api.openweathermap.org/data/2.5/weather?q=" + this.zipcode + "&APPID=de84f1f1eaffc87826f0a6d42094445f")
  .subscribe(
    (res: Response) => {
      const weatherCity = res.json();
      console.log(weatherCity);
      this.cityName = weatherCity.name;
      this.description = weatherCity.weather[0].description;
      this.temp = (weatherCity.main.temp * (9/5) - 459.67).toFixed(1);
      this.windspeed = (weatherCity.wind.speed * 2.237).toFixed(1);
      this.high = (weatherCity.main.temp_max * (9/5) - 459.67).toFixed(1);
      this.low = (weatherCity.main.temp_min * (9/5) - 459.67).toFixed(1);
      }
    )
  }
  title = 'Weather App';
}