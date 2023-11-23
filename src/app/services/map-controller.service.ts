import { Injectable } from '@angular/core';
import { Marker } from '../models/marker.model';
import { HttpClient } from '@angular/common/http';

const apiKey = "ghTLo47bIQi-POLPs-YUKo--qkK3B4F-SeunVt5BsYY";


@Injectable({
  providedIn: 'root'
})


export class MapControllerService {

  private marker: Marker = {position: {lat:0,lng:0}, title:""};

  constructor(private http: HttpClient) { }

  getMarker(){
    return this.marker;
  }

  addMarker(marker: Marker){
    this.marker = marker;
  }

  resetMarker(){
    this.marker = {position: {lat:0,lng:0}, title:""};
  
  }

  getHttpData(marker: Marker){
    var link = `https://revgeocode.search.hereapi.com/v1/revgeocode?at=${marker.position.lat},${marker.position.lng}&lang=es-DO&apikey=${apiKey}`;
    return this.http.get(link);
  }
}


