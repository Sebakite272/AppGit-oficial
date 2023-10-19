import { Component, OnInit } from '@angular/core';
import { Router, NavigationExtras, ActivatedRoute } from '@angular/router';
import { AuthGuard } from '../auth.guard';
import { AutenticacionService } from '../servicios/autenticacion.service';
@Component({
  selector: 'app-reserva1',
  templateUrl: './reserva1.page.html',
  styleUrls: ['./reserva1.page.scss'],
})
export class Reserva1Page implements OnInit {
  public mensaje="";

  constructor(private router: Router, private activatedRouter: ActivatedRoute, private authGuard: AuthGuard, private auth: AutenticacionService) { }



  public informacion = {
    hora:"",
    cant_personas:"",
    precio:""
  }

  enviarInfoViaje() {
    
    if (this.informacion.hora && this.informacion.cant_personas && this.informacion.precio) {
      let navigationExtras: NavigationExtras = {
        state: { informacion: this.informacion }
      }
      this.router.navigate(['/confirmar-viaje'], navigationExtras);
    } else {
      this.mensaje = "Debe completar todos los campos";
    }
  
}



  ngOnInit() {
    this.activatedRouter.queryParams.subscribe(() => {
      let state = this.router.getCurrentNavigation()?.extras.state;
      if (state) {
        this.informacion.hora = state['informacion'].hora;
        this.informacion.cant_personas = state['informacion'].cant_personas;
        this.informacion.precio = state['informacion'].precio;
        console.log(this.informacion);
      }
    })
  }






  }


