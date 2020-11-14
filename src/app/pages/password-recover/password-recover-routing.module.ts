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
    loadChildren: () => import('../register-validation-code/register-validation-code.module').then( m => m.RegisterValidationCodePageModule)
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PasswordRecoverPageRoutingModule {}
