import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { EnviosPageRoutingModule } from './envios-routing.module';

import { EnviosPage } from './envios.page';
import { TabBarComponent } from '../compartido/tab-bar/tab-bar.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    EnviosPageRoutingModule
  ],
  declarations: [EnviosPage, TabBarComponent]
})
export class EnviosPageModule {}
