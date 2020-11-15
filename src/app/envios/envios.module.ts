import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { EnviosPageRoutingModule } from './envios-routing.module';

import { EnviosPage } from './envios.page';
import { ComponentModule } from '../compartido/components.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    EnviosPageRoutingModule,
    ComponentModule
  ],
  declarations: [EnviosPage]
})
export class EnviosPageModule {}
