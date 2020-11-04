import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PwrRecoverPage } from './pwr-recover.page';

const routes: Routes = [
  {
    path: '',
    component: PwrRecoverPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PwrRecoverPageRoutingModule {}
