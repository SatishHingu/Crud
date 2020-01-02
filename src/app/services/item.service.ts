import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Item } from '../models/item';
import { Observable } from 'rxjs';
const headerOption = {
  headers: new HttpHeaders({
    'Content-Type': 'application/json'
  })
};
@Injectable({
  providedIn: 'root'
})
export class ItemService {
  mockUrl = 'http://localhost:3000/Employee';
  currentItem: Item = {
    id: null,
    firstname: '',
    lastname: '',
    birthdate : null,
    designation: '',
    address: '' ,
  };

  constructor(
    private http: HttpClient
  ) { }
getAllItem(): Observable<Item[]> {
  return this.http.get<Item[]>(this.mockUrl, headerOption);
}

deleteItem(id: number): Observable<Item> {
  return this.http.delete<Item>(this.mockUrl + '/' + id, headerOption);
}
createItem(itm: Item): Observable<Item> {
  console.log(itm);
  return this.http.post<Item>(this.mockUrl, itm, headerOption);
  }
updateItem(itm: Item): Observable<Item> {
  return this.http.put<Item>(this.mockUrl + '/' + itm.id, itm, headerOption);
  }

}
