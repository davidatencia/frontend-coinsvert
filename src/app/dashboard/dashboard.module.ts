import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ChartsModule } from 'ng2-charts';


import { IonicModule } from '@ionic/angular';

import { DashboardPageRoutingModule } from './dashboard-routing.module';

import { DashboardPage } from './dashboard.page';
import { ComponentModule } from '../compartido/components.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,ChartsModule,
    IonicModule,
    DashboardPageRoutingModule,
    ComponentModule
  ],
  declarations: [DashboardPage]
})
export class DashboardPageModule {}
