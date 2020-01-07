import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class MapsService {
  // currentLocation: Location = {
  //   latitude: '',
  //   longitude: '',
  // };

  constructor(private http: HttpClient) { }
// getLocation() {
// return this.http.get('https://ipapi.co/json/');
// }
}
