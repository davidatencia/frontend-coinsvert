import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MenuController } from '@ionic/angular';

@Component({
  selector: 'app-register-validation-code',
  templateUrl: './register-validation-code.page.html',
  styleUrls: ['./register-validation-code.page.scss'],
})
export class RegisterValidationCodePage implements OnInit {

  public M_Msj: String;
  public Codigo: any;

  constructor(private _router: Router, private menuCrl: MenuController) { 
    this.M_Msj = "oculto";
    this.Codigo = {
      codi: "",
      otro: ""
    }
  }

  ngOnInit() {
    this.menuCrl.enable(false);
  }

  formCodigo(){
  }
}

