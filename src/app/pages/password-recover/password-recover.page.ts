import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-password-recover',
  templateUrl: './password-recover.page.html',
  styleUrls: ['./password-recover.page.scss'],
})
export class PasswordRecoverPage implements OnInit {

  public Correo: any;

  constructor(private _router: Router) { 
    this.Correo = "";
  }

  ngOnInit() {
  }

  RedirigirLogin(){
    this._router.navigate(["/login"]);
  }

  formEnviarCSubmit(){
    this._router.navigate(["/register-validation-code"]);
  }
}
