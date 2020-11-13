import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { MenuPageRoutingModule } from '../menu/menu-routing.module';

import { MenuPage } from './menu.page';
import { TabBarComponent } from '../compartido/tab-bar/tab-bar.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    MenuPageRoutingModule
  ],
  declarations: [MenuPage, TabBarComponent]
})
export class MenuPageModule {}
