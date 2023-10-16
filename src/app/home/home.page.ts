import { Component, OnInit} from '@angular/core';
import { Router, NavigationExtras, ActivatedRoute } from '@angular/router';
import { AuthGuard } from '../auth.guard';
import { AutenticacionService } from '../servicios/autenticacion.service';



@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage implements OnInit {

  
  constructor(private router: Router, private activatedRouter: ActivatedRoute, private authGuard: AuthGuard, private auth: AutenticacionService) {}

  public alertButtons = ['OK'];
  public user = {
    nombreUsuario: "",
    password: ""
  }



  ngOnInit() {
    this.activatedRouter.queryParams.subscribe(() => {
      let state = this.router.getCurrentNavigation()?.extras.state;
      if (state) {
        this.user.nombreUsuario = state['user'].nombreUsuario;
        this.user.password = state['user'].password;
        console.log(this.user);
      }
    })
  }


}



