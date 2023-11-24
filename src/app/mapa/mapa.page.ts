import { Component, OnInit } from '@angular/core';
import { Marker } from '../models/marker.model';
import { CoordInfo } from '../models/coord-info.model';
import { MapControllerService } from '../services/map-controller.service';


declare var google:any;



@Component({
  selector: 'app-mapa',
  templateUrl: 'mapa.page.html',
  styleUrls: ['mapa.page.scss'],
})
export class MapaPage implements OnInit {

  map = null;

  //marker: Marker = {position:{lat:0,lng:0}, title:""};//
  
  marker: Marker = {
    position: {
     lat: 18.48291933354735,
      lng: -69.91223183166025,
    },
    title: "Sambil"
  };

  coordInfo: CoordInfo = {country: "", city: ""};


  constructor(private mapController: MapControllerService) { }

  ngOnInit() {
    this.marker = this.mapController.getMarker();
    this.loadMap();

  }

  loadMap() {
    // create a new map by passing HTMLElement
    const mapEle: HTMLElement | null = document.getElementById('mapa');
    // create LatLng object
    if (mapEle) {
      const myLatLng = {
        lat: this.marker.position.lat, 
        lng:  this.marker.position.lng};
      // create map
      this.map = new google.maps.Map(mapEle, {
        center: myLatLng,
        zoom: 12
      });
    
      google.maps.event.addListenerOnce(this.map, 'idle', () => {
        this.addMarker(this.marker);
        //this.renderMarkers();
        mapEle.classList.add('show-map');
      });
        } else {
          console.error('Element with ID "map" not found');
        }
  
  }

 
    addMarker(marker: Marker) {
      var mapMarker = new google.maps.Marker({
        position: marker.position,
        map: this.map,
        title: marker.title
      });

      this.addInfoToMarker(marker, mapMarker);
      return mapMarker;
    }
    
  
  

  addInfoToMarker(marker: Marker, mapMarker: any) {
    this.mapController.getHttpData(marker).subscribe((coordData: any) => {
      this.coordInfo = {
        country: coordData.items[0].address.countryName,
        city: coordData.items[0].address.city,
        marker: marker
      };

      let infoWindowContent = `
      <div id="content" style="color: black;">
        <h2 id="firstHeading" class="firstHeading"> ${marker.title} </h2>
        <p>Pais: ${this.coordInfo.country} </p>
        <p>Ciudad: ${this.coordInfo.city} </p>
      </div>
      `;

      let infoWindow = new google.maps.InfoWindow({content: infoWindowContent});


      mapMarker.addListener('click', () => {
        infoWindow.open(this.map, mapMarker);
      });

    });
  }

  

  }

  




