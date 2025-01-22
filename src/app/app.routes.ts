import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: 'home',
    loadComponent: () => import('./paginas/home/home.page').then((m) => m.HomePage),
  },
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full',
  },
  {
    path: 'formulario-avisos',
    loadComponent: () => import('./paginas/formulario-avisos/formulario-avisos.page').then( m => m.FormularioAvisosPage)
  },
];
