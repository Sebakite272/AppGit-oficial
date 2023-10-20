import { Component, OnInit } from '@angular/core';
import { Router, NavigationExtras, ActivatedRoute } from '@angular/router';
import { AuthGuard } from '../auth.guard';
@Component({
  selector: 'app-confirm-viaje2',
  templateUrl: './confirm-viaje2.page.html',
  styleUrls: ['./confirm-viaje2.page.scss'],
})
export class ConfirmViaje2Page implements OnInit {
  miObjeto: any;
  public mensaje="";


  constructor(private router: Router,private activatedRouter: ActivatedRoute, private authGuard: AuthGuard) { }

  public info = {
    hora:"",
    cant_personas:"",
    vehiculo:"",
    precio:""
  }

  enviarConfirmacion() {
    if (this.info.hora) {
      let navigationExtras: NavigationExtras = {
        state: { info: this.info }
      }
      this.router.navigate(['/viaje-exitoso22'], navigationExtras);
    } else {
      this.mensaje = "No ha traspasado los datos";
      }
  
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
