import { Component, OnInit } from '@angular/core';
import { Router, NavigationExtras } from '@angular/router';
import { AutenticacionService } from '../servicios/autenticacion.service';

@Component({
  selector: 'app-registro',
  templateUrl: './registro.page.html',
  styleUrls: ['./registro.page.scss'],
})
export class RegistroPage {

  constructor(private router: Router, private auth: AutenticacionService) { }
  public mensaje = "";
  public estado: String = "";

  public alertButtons = ['OK']


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
        this.router.navigate(['/home'], navigationExtras);
      } else {
        this.mensaje = "Debe ingresar sus credenciales";
      }
    });
  }




  ngOnInit() {
  }

}
