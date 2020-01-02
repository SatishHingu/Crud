import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  public apiData: any;
  constructor(
    private http: HttpClient
    ) { }


getProduct() {
  return this.http.get('https://jsonplaceholder.typicode.com/todos');
}

getContact() {
  return this.http.get('https://jsonplaceholder.typicode.com/posts');
}
getHome() {
  return this.http.get('https://jsonplaceholder.typicode.com/albums');
}
getApi(albumId: any) {
  return this.http.get(`https://jsonplaceholder.typicode.com/photos?albumsId=${albumId}`);
}
}

