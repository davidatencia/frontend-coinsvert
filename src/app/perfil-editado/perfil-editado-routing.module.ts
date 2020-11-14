import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PerfilEditadoPage } from './perfil-editado.page';

const routes: Routes = [
  {
    path: '',
    component: PerfilEditadoPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PerfilEditadoPageRoutingModule {}
