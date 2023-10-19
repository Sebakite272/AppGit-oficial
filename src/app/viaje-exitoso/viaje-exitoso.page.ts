import { Component, OnInit } from '@angular/core';
import { Router, NavigationExtras, ActivatedRoute } from '@angular/router';
import { AuthGuard } from '../auth.guard';
@Component({
  selector: 'app-viaje-exitoso',
  templateUrl: './viaje-exitoso.page.html',
  styleUrls: ['./viaje-exitoso.page.scss'],
})
export class ViajeExitosoPage implements OnInit {
  public mensaje="";

  constructor(private router: Router, private activatedRouter: ActivatedRoute, private authGuard: AuthGuard) { }

  public informacion = {
    hora:"",
    cant_personas:"",
    precio:""
  }


  ngOnInit() {
      this.activatedRouter.queryParams.subscribe(() => {
        let state = this.router.getCurrentNavigation()?.extras.state;
        if  (state) {
          /*let navigationExtras: NavigationExtras = {
            state: { informacion: this.informacion }
          }*/
            this.informacion.hora = state['informacion'].hora;
            this.informacion.cant_personas = state['informacion'].cant_personas;
            this.informacion.precio = state['informacion'].precio;
            console.log(this.informacion);
        } else {
          console.log("hola");
        }
    
      });
      
  
    }
  
  }




