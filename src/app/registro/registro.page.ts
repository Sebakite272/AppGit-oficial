import { Component,  ViewChild } from '@angular/core';
import { IonModal } from '@ionic/angular';
import { Router, NavigationExtras } from '@angular/router';
import { AutenticacionService } from '../servicios/autenticacion.service';


@Component({
  selector: 'app-registro',
  templateUrl: './registro.page.html',
  styleUrls: ['./registro.page.scss'],
})
export class RegistroPage {
  @ViewChild(IonModal) modal!: IonModal;

  constructor(private router: Router, private auth: AutenticacionService) { }
  public mensaje = "";
  public estado: String = "";

  public alertButtons = ['OK']


  user = {
    nombreUsuario: "",
    password: "",
    gmail:"",
  }

  enviarInformacion() {
    this.auth.login(this.user.nombreUsuario, this.user.password,).then(() => {
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

  mostrarConsola() {
    console.log(this.user);
    if (this.user.nombreUsuario != "" && this.user.password != "") {
      this.mensaje = "El Usuario esta Conectado";
    } else {
      this.mensaje = "Usuario y contraseña deben tener algun valor"
    }
  }

  cancel() {
    this.modal.dismiss(null, 'cancel');
  }

  confirm() {
    this.auth.register(this.user.nombreUsuario, this.user.password).then((res) => {
      if (res) {
        this.mensaje = "Usuario Existente";
        this.router.navigate(['/home']);
      } else {
        this.mensaje = "El Registro ha sido Exitoso";
        this.router.navigate(['/home']);
        
      }
    })
  }



}
