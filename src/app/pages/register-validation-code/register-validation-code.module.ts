import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { RegisterValidationCodePageRoutingModule } from './register-validation-code-routing.module';

import { RegisterValidationCodePage } from './register-validation-code.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RegisterValidationCodePageRoutingModule
  ],
  declarations: [RegisterValidationCodePage]
})
export class RegisterValidationCodePageModule {}
