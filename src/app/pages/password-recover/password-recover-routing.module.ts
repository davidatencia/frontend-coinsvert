import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PasswordRecoverPage } from './password-recover.page';

const routes: Routes = [
  {
    path: '',
    component: PasswordRecoverPage
  },
  {
    path: 'register-validation-code',
    loadChildren: '../register-validation-code/register-validation-code.module'
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PasswordRecoverPageRoutingModule {}
