import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: 'home',
    loadComponent: () => import('./home/home.page').then((m) => m.HomePage),
  },
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full',
  },
  {
    path: 'ganjil-genap',
    loadComponent: () => import('./ganjil-genap/ganjil-genap.page').then( m => m.GanjilGenapPage)
  },
  {
    path: 'operasi',
    loadComponent: () => import('./operasi/operasi.page').then( m => m.OperasiPage)
  },
  {
    path: 'ideal',
    loadComponent: () => import('./ideal/ideal.page').then( m => m.IdealPage)
  },
  {
    path: 'prima',
    loadComponent: () => import('./prima/prima.page').then( m => m.PrimaPage)
  },
];
