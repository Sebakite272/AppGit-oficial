import { Component, OnInit } from '@angular/core';
import { Router, NavigationExtras, ActivatedRoute } from '@angular/router';
import { AuthGuard } from '../auth.guard';
import { AutenticacionService } from '../servicios/autenticacion.service';


@Component({
  selector: 'app-alert',
  templateUrl: './alert.page.html',
  styleUrls: ['./alert.page.scss'],
})
export class AlertPage implements OnInit {

  constructor(private router: Router, private activatedRouter: ActivatedRoute, private authGuard: AuthGuard, private auth: AutenticacionService) { }

  user = {
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
