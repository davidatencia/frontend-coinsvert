<<<<<<< HEAD
<<<<<<< HEAD
import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'login',
    loadChildren: () => import('./login/login.module').then( m => m.LoginPageModule)
  },
  {
    path: '',
    redirectTo: 'login',
    pathMatch: 'full'
  },
  {
    path: 'menu',
    loadChildren: () => import('./menu/menu.module').then( m => m.MenuPageModule)
  },
  {
    path: 'password-recover',
    loadChildren: () => import('./pages/password-recover/password-recover.module').then( m => m.PasswordRecoverPageModule)
  },
  {
    path: 'new-password',
    loadChildren: () => import('./pages/new-password/new-password.module').then( m => m.NewPasswordPageModule)
  },
  {
    path: 'dashboard',
    loadChildren: () => import('./dashboard/dashboard.module').then( m => m.DashboardPageModule)
  },
=======
import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'login',
    loadChildren: () => import('./login/login.module').then( m => m.LoginPageModule)
  },
  {
    path: '',
    redirectTo: 'login',
    pathMatch: 'full'
  },
  {
    path: 'dashboard',
    loadChildren: () => import('./dashboard/dashboard.module').then( m => m.DashboardPageModule)
  },
  {
    path: 'password-recover',
    loadChildren: () => import('./pages/password-recover/password-recover.module').then( m => m.PasswordRecoverPageModule)
  },
  {
    path: 'new-password',
    loadChildren: () => import('./pages/new-password/new-password.module').then( m => m.NewPasswordPageModule)
  },  {
    path: 'register-validation-code',
    loadChildren: () => import('./pages/register-validation-code/register-validation-code.module').then( m => m.RegisterValidationCodePageModule)
  },
<<<<<<< HEAD
>>>>>>> cebb6ea0fab3daf7d9b112c1146a6b54cd87ae9c
];
@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
=======
<<<<<<< HEAD

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
    path: 'login',
    loadChildren: () => import('./login/login.module').then( m => m.LoginPageModule)
  },
  {
    path: 'dashboard',
    loadChildren: () => import('./dashboard/dashboard.module').then( m => m.DashboardPageModule)
  },
  // {
  //   path: 'panel',
  //   loadChildren: () => import('./pagesdashboard/panel/panel.module').then( m => m.PanelPageModule)
  // },
  // {
  //   path: 'wallet',
  //   loadChildren: () => import('./pagesdashboard/wallet/wallet.module').then( m => m.WalletPageModule)
  // },
  // {
  //   path: 'perfil',
  //   loadChildren: () => import('./pagesdashboard/perfil/perfil.module').then( m => m.PerfilPageModule)
  // },
  // {
  //   path: 'precios',
  //   loadChildren: () => import('./pagesdashboard/precios/precios.module').then( m => m.PreciosPageModule)
  // },
  // {
  //   path: 'market',
  //   loadChildren: () => import('./pagesdashboard/market/market.module').then( m => m.MarketPageModule)
  // },
  // {
  //   path: 'prices',
  //   loadChildren: () => import('./prices/prices.module').then( m => m.PricesPageModule)
  // },
  // {
  //   path: 'password-recover',
  //   loadChildren: () => import('./pages/password-recover/password-recover.module').then( m => m.PasswordRecoverPageModule)
  // },
  // {
  //   path: 'new-password',
  //   loadChildren: () => import('./pages/new-password/new-password.module').then( m => m.NewPasswordPageModule)
  // },
];

=======


];
>>>>>>> cebb6ea0fab3daf7d9b112c1146a6b54cd87ae9c
@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
<<<<<<< HEAD
>>>>>>> 74bdfb890dfa9c7d34a142560bc9bd4bf0dad376
=======
>>>>>>> 5af72d2c2039decf33b27de80a34d8fba9da0ca7
>>>>>>> cebb6ea0fab3daf7d9b112c1146a6b54cd87ae9c
