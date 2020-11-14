import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ChartsModule } from 'ng2-charts';


import { IonicModule } from '@ionic/angular';

import { DashboardPageRoutingModule } from './dashboard-routing.module';

import { DashboardPage } from './dashboard.page';
import { TabBarComponent } from '../compartido/tab-bar/tab-bar.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,ChartsModule,
    IonicModule,
    DashboardPageRoutingModule
  ],
  declarations: [DashboardPage, TabBarComponent]
})
export class DashboardPageModule {}