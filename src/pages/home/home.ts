import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { Geolocation } from '@ionic-native/geolocation';


@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  public longitude: number;
  public latitude: number;
  public altitude: number;
  public speed: number;
  public direction: number;
  public isTracking: boolean;
  public Err: string;
  
  // private options: GeolocationOptions;


  constructor(public navCtrl: NavController, public geolocation: Geolocation) {
    
    this.isTracking = false;
    this.latitude = 50;
    this.longitude = 4.1;
    this.altitude = 0;
    this.speed = 0;
    this.direction = 0;
    this.Err = 'None - so far so good';

    // this.options = {
    //   enableHighAccuracy: true,
    //   timeout: 5000,
    //   maximumAge: 0
    // };
  }

  public startTracking() {
    console.log('START TRACKING');
    this.isTracking = true;
    this.GetPosition();
  }

  public stopTracking() {
    console.log('STOP TRACKING');
    this.isTracking = false;
    this.GetPosition();
  }

  public GetPosition() {
    this.geolocation.getCurrentPosition().then((resp) => {
      console.log('POSITION REQUESTED');
      this.latitude = resp.coords.latitude;
      this.longitude = resp.coords.longitude;
    }, (error) => {
      this.Err = error.message;
    });
  }

}
