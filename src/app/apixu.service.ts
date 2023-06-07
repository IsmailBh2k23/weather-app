import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ApixuService {

  constructor(private http: HttpClient) { }
  
  getWeather(location: any){
    return this.http.get(
        'http://api.weatherapi.com/v1/current.json?key=470d0528c28748ea9ca194312230506&q='+location+'&aqi=no'
    );
  }
}
