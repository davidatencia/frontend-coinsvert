import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { PerfilEditadoPageRoutingModule } from './perfil-editado-routing.module';

import { PerfilEditadoPage } from './perfil-editado.page';
import { TabBarComponent } from '../compartido/tab-bar/tab-bar.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    PerfilEditadoPageRoutingModule
  ],
  declarations: [PerfilEditadoPage, TabBarComponent]
})
export class PerfilEditadoPageModule {}
