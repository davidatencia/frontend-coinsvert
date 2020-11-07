
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { RegisterValidationCodePage } from './register-validation-code.page';

const routes: Routes = [
  {
    path: '',
    component: RegisterValidationCodePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class RegisterValidationCodePageRoutingModule {}