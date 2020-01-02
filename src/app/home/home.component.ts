import { Component, OnInit } from '@angular/core';
import { ApiService } from '../services/api.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
albums: any;
  constructor(
    private apiService: ApiService,
  ) { }

  ngOnInit() {
    this.albums = this.apiService.getHome();
  }

  handleOnclickData(apiData: number) {
    console.log(apiData);

    this.apiService.apiData = apiData;
  }

}
