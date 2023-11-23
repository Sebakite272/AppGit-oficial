import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AlertController } from '@ionic/angular';
import { MapControllerService } from '../services/map-controller.service';
import { Marker } from '../models/marker.model';

@Component({
  selector: 'app-ingreso-mapa',
  templateUrl: 'ingreso-mapa.page.html',
  styleUrls: ['ingreso-mapa.page.scss'],
})
export class IngresoMapaPage {

  title: string = ''; 
  lat: number = 0; 
  lng: number = 0; 



  constructor(private router: Router, private alertController: AlertController, private mapController: MapControllerService  ) { }


  async sendMarker(Title: string, Lat: number, Lng: number) {
    if(Title == "") {
      const alert = await this.alertController.create({
        header: 'Alerta',
        message: "Ingrese los parametros para continuar",
        buttons: ['OK']
      });
        await alert.present();

    }
    else {
      var marker:  Marker = { 
        position: { 
          lat: Lat,
          lng: Lng
        },
        title: Title
      }
      this.mapController.addMarker(marker);
      this.router.navigate(['./mapa']);
    }
    }

  

}
