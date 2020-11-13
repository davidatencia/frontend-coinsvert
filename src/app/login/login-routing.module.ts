import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { LoginPage } from './login.page';
import { PasswordRecoverPage } from '../pages/password-recover/password-recover.page';

const routes: Routes = [
  {
    path: '',
    component: LoginPage
  },
  {
    path: 'password-recover',
    component: PasswordRecoverPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class LoginPageRoutingModule {}
