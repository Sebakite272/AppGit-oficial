import { Component, OnInit } from '@angular/core';
import { Router, NavigationExtras, ActivatedRoute } from '@angular/router';
import { AuthGuard } from '../auth.guard';
@Component({
  selector: 'app-reserva1',
  templateUrl: './reserva1.page.html',
  styleUrls: ['./reserva1.page.scss'],
})
export class Reserva1Page implements OnInit {

  constructor(private router: Router, private activatedRouter: ActivatedRoute, private authGuard: AuthGuard) { }

  public informacion = {
    precio:""
  }



  ngOnInit() {
    this.activatedRouter.queryParams.subscribe(() => {
      let state = this.router.getCurrentNavigation()?.extras.state;
      if (state) {
        this.informacion.precio = state['informacion'].precio;
        console.log(this.informacion);
      }
    })
  }
  
  }


