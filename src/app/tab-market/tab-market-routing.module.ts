import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { TabMarketPage } from './tab-market.page';

const routes: Routes = [
  {
    path: '',
    component: TabMarketPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TabMarketPageRoutingModule {}
