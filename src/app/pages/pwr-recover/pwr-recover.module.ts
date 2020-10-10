import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { PwrRecoverPageRoutingModule } from './pwr-recover-routing.module';

import { PwrRecoverPage } from './pwr-recover.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    PwrRecoverPageRoutingModule
  ],
  declarations: [PwrRecoverPage]
})
export class PwrRecoverPageModule {}
