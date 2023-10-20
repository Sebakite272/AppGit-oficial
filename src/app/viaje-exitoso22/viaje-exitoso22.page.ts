import { Component, OnInit } from '@angular/core';
import { Router, NavigationExtras, ActivatedRoute } from '@angular/router';
import { AuthGuard } from '../auth.guard';
@Component({
  selector: 'app-viaje-exitoso22',
  templateUrl: './viaje-exitoso22.page.html',
  styleUrls: ['./viaje-exitoso22.page.scss'],
})
export class ViajeExitoso22Page implements OnInit {
  public mensaje="";
  
  constructor(private router: Router, private activatedRouter: ActivatedRoute, private authGuard: AuthGuard) { }

  public info = {
    hora:"",
    cant_personas:"",
    vehiculo:"",
    precio:""
  }


  ngOnInit() {
    this.activatedRouter.queryParams.subscribe(() => {
      let state = this.router.getCurrentNavigation()?.extras.state;
      if  (state) {
        /*let navigationExtras: NavigationExtras = {
          state: { informacion: this.informacion }
        }*/
          this.info.hora = state['info'].hora;
          this.info.cant_personas = state['info'].cant_personas;
          this.info.vehiculo = state['info'].vehiculo;
          this.info.precio = state['info'].precio;
          console.log(this.info);
      } else {
        console.log("hola");
      }
  
    });
    
  }

}
