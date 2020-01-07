import { Component, OnInit } from '@angular/core';
import { MapsService } from '../services/maps.service';

@Component({
  selector: 'app-maps',
  templateUrl: './maps.component.html',
  styleUrls: ['./maps.component.css']
})
export class MapsComponent implements OnInit {

    // tslint:disable-next-line: no-inferrable-types
    lat: number = 21.212858;
    // tslint:disable-next-line: no-inferrable-types
    lng: number = 72.857382;

  constructor( private map: MapsService) { }

  ngOnInit() {
    // this.map.getLocation().subscribe(data => {
    // console.log(data);
    // this.lat = data.langitude;
    // this.lng = data.langitude;
    // });
  }

}
