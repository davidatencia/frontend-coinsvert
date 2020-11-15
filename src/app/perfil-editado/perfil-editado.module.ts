import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { PerfilEditadoPageRoutingModule } from './perfil-editado-routing.module';

import { PerfilEditadoPage } from './perfil-editado.page';
import { ComponentModule } from '../compartido/components.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    PerfilEditadoPageRoutingModule,
    ComponentModule
  ],
  declarations: [PerfilEditadoPage]
})
export class PerfilEditadoPageModule {}
