import { Component, OnInit} from '@angular/core';
import { Router, NavigationExtras, ActivatedRoute } from '@angular/router';
import { AuthGuard } from '../auth.guard';
import { AutenticacionService } from '../servicios/autenticacion.service';



@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  public mensaje = "";

  
  constructor(private router: Router, private activatedRouter: ActivatedRoute, private authGuard: AuthGuard, private auth: AutenticacionService) {}

  public alertButtons = ['OK'];
   user = {
    nombreUsuario: "",
    password: ""
  }

  enviarInformacion() {
    this.auth.login(this.user.nombreUsuario, this.user.password).then(() => {
      if (this.auth.autenticado) {
        let navigationExtras: NavigationExtras = {
          state: { user: this.user }
        }
        this.router.navigate(['/alert'], navigationExtras);
      } else {
        this.mensaje = "Debe ingresar sus credenciales";
      }
    });
  }



 


}



