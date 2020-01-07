import { Component, OnInit, ElementRef, NgZone } from '@angular/core';
import { MapsAPILoader, MouseEvent } from '@agm/core';
import { ViewChild } from '@angular/core';

@Component({
  selector: 'app-maps',
  templateUrl: './maps.component.html',
  styleUrls: ['./maps.component.css']
})
export class MapsComponent implements OnInit {

// tslint:disable-next-line: no-inferrable-types
    title: string = 'AGM Project';
    // tslint:disable-next-line: no-inferrable-types
    lat: number; // = 21.212858;
    // tslint:disable-next-line: no-inferrable-types
    lng: number; // = 72.857382;
    zoom: number;
    address: string;
    private geoCoder: any;

    @ViewChild ('search', { static: false})
    public searchElementRef: ElementRef;

  constructor(
    private mapsAPILoader: MapsAPILoader,
    private ngZone: NgZone,
    ) { }

    ngOnInit() {
      this.mapsAPILoader.load().then(() => {
        this.setCurrentLocation();
        // tslint:disable-next-line: new-parens
        this.geoCoder = new google.maps.Geocoder;
        // tslint:disable-next-line: prefer-const
        let autocomplete = new google.maps.places.Autocomplete(this.searchElementRef.nativeElement, {
          // tslint:disable-next-line: quotemark
          types: ["address"]
        });
        // tslint:disable-next-line: quotemark
        autocomplete.addListener("place_changed", () => {
          this.ngZone.run(() => {
            // tslint:disable-next-line: prefer-const
            let place: google.maps.places.PlaceResult = autocomplete.getPlace();

            if (place.geometry === undefined || place.geometry === null) {
              return;
            }

            this.lat = place.geometry.location.lat();
            this.lng = place.geometry.location.lng();
            this.zoom = 12;
          });
        });
      });
    }

    // Get Current Location Coordinates
    private setCurrentLocation() {
      if ('geolocation' in navigator) {
        navigator.geolocation.getCurrentPosition((position) => {
          this.lat = position.coords.latitude;
          this.lng = position.coords.longitude;
          this.zoom = 8;
          this.getAddress(this.lat, this.lng);
        });
      }
    }

    markerDragEnd($event: MouseEvent) {
      console.log($event);
      this.lat = $event.coords.lat;
      this.lng = $event.coords.lng;
      this.getAddress(this.lat, this.lng);
    }

    getAddress(latitude: any, longitude: any) {
      // tslint:disable-next-line: object-literal-key-quotes
      this.geoCoder.geocode({ 'location': { lat: latitude, lng: longitude } }, (results: any, status: any) => {
        console.log(results);
        console.log(status);
        if (status === 'OK') {
          if (results[0]) {
            this.zoom = 12;
            this.address = results[0].formatted_address;
          } else {
            window.alert('No results found');
          }
        } else {
          window.alert('Geocoder failed due to: ' + status);
        }
      });
    }
  }
