import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-register-validation-code',
  templateUrl: './register-validation-code.page.html',
  styleUrls: ['./register-validation-code.page.scss'],
})
export class RegisterValidationCodePage implements OnInit {


  constructor(private _router: Router) { }

  ngOnInit() {
  }

  Redirigir(con){
    if(con==1){
      this._router.navigate(["/password-recover"]);
    }
    if(con==2){
      this._router.navigate(["/new-password"]);
    }
  }
}

