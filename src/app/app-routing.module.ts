import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'home',
    loadChildren: () => import('./home/home.module').then( m => m.HomePageModule)
  },
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  {
    path: 'alert',
    loadChildren: () => import('./pages/alert/alert.module').then( m => m.AlertPageModule)
  },
  {
    path: 'pagina',
    loadChildren: () => import('./pagina/pagina.module').then( m => m.PaginaPageModule)
  },
  {
    path: 'modificar',
    loadChildren: () => import('./modificar/modificar.module').then( m => m.ModificarPageModule)
  },
  {
    path: 'principal',
    loadChildren: () => import('./principal/principal.module').then( m => m.PrincipalPageModule)
  },
  {
    path: 'reserva1',
    loadChildren: () => import('./reserva1/reserva1.module').then( m => m.Reserva1PageModule)
  },
  {
    path: 'vehiculos-prop',
    loadChildren: () => import('./vehiculos-prop/vehiculos-prop.module').then( m => m.VehiculosPropPageModule)
  },
  {
    path: 'disponible',
    loadChildren: () => import('./disponible/disponible.module').then( m => m.DisponiblePageModule)
  },
  {
    path: 'verificar-disp',
    loadChildren: () => import('./verificar-disp/verificar-disp.module').then( m => m.VerificarDispPageModule)
  },
  {
    path: 'no-dispo',
    loadChildren: () => import('./no-dispo/no-dispo.module').then( m => m.NoDispoPageModule)
  },
  {
    path: 'si-dispo',
    loadChildren: () => import('./si-dispo/si-dispo.module').then( m => m.SiDispoPageModule)
  },

  {
    path: 'confirmar-viaje',
    loadChildren: () => import('./confirmar-viaje/confirmar-viaje.module').then( m => m.ConfirmarViajePageModule)
  },
  {
    path: 'viaje-exitoso',
    loadChildren: () => import('./viaje-exitoso/viaje-exitoso.module').then( m => m.ViajeExitosoPageModule)
  },
  {
    path: 'cerrar-sesion',
    loadChildren: () => import('./cerrar-sesion/cerrar-sesion.module').then( m => m.CerrarSesionPageModule)
  },
  {
    path: 'success-sc',
    loadChildren: () => import('./success-sc/success-sc.module').then( m => m.SuccessScPageModule)
  },
  {
    path: 'reserva2',
    loadChildren: () => import('./reserva2/reserva2.module').then( m => m.Reserva2PageModule)
  },
  {
    path: 'registro',
    loadChildren: () => import('./registro/registro.module').then( m => m.RegistroPageModule)
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
