import { Component, OnInit } from '@angular/core';
import { Router, NavigationExtras, ActivatedRoute } from '@angular/router';
import { AuthGuard } from '../auth.guard';
import { AutenticacionService } from '../servicios/autenticacion.service';
@Component({
  selector: 'app-reserva2',
  templateUrl: './reserva2.page.html',
  styleUrls: ['./reserva2.page.scss'],
})
export class Reserva2Page implements OnInit {
  public mensaje="";

  constructor(private router: Router, private activatedRouter: ActivatedRoute, private authGuard: AuthGuard, private auth: AutenticacionService) { }

  public info = {
    hora:"",
    cant_personas:"",
    vehiculo:"",
    precio:""
  }

  enviarViaje() {
    
    if (this.info.hora && this.info.cant_personas && this.info.vehiculo &&  this.info.precio) {
      let navigationExtras: NavigationExtras = {
        state: { info: this.info }
      }
      this.router.navigate(['/confirm-viaje2'], navigationExtras);
    } else {
      this.mensaje = "Debe completar todos los campos";
    }
  
}

  ngOnInit() {
    this.activatedRouter.queryParams.subscribe(() => {
      let state = this.router.getCurrentNavigation()?.extras.state;
      if (state) {
        this.info.hora = state['info'].hora;
        this.info.cant_personas = state['info'].cant_personas;
        this.info.vehiculo = state['info'].vehiculo;
        this.info.precio = state['info'].precio;
        console.log(this.info);
      }
    })
  }

}
