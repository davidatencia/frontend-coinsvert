import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { TabDashboardPageRoutingModule } from './tab-dashboard-routing.module';

import { TabDashboardPage } from './tab-dashboard.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    TabDashboardPageRoutingModule
  ],
  declarations: [TabDashboardPage]
})
export class TabDashboardPageModule {}
