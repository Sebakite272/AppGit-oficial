import { Component, OnInit } from '@angular/core';
import { Router, NavigationExtras, ActivatedRoute } from '@angular/router';
import { AuthGuard } from '../auth.guard';
@Component({
  selector: 'app-confirmar-viaje',
  templateUrl: './confirmar-viaje.page.html',
  styleUrls: ['./confirmar-viaje.page.scss'],
})
export class ConfirmarViajePage implements OnInit {
  miObjeto: any;
  public mensaje="";


  constructor(private router: Router,private activatedRouter: ActivatedRoute, private authGuard: AuthGuard, ) { } 
    
  
  public informacion = {
    hora:"",
    cant_personas:"",
    precio:""
  }


  enviarInfoConfirm() {
    if (this.informacion.hora) {
      let navigationExtras: NavigationExtras = {
        state: { informacion: this.informacion }
      }
      this.router.navigate(['/viaje-exitoso'], navigationExtras);
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
