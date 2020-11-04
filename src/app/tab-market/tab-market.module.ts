import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { TabMarketPageRoutingModule } from './tab-market-routing.module';

import { TabMarketPage } from './tab-market.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    TabMarketPageRoutingModule
  ],
  declarations: [TabMarketPage]
})
export class TabMarketPageModule {}
