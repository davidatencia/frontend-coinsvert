import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MenuController } from '@ionic/angular';
import { PeticionesRecuperarPasswordService } from '../../services/RContraseña';

@Component({
  selector: 'app-password-recover',
  templateUrl: './password-recover.page.html',
  styleUrls: ['./password-recover.page.scss'],
})
export class PasswordRecoverPage implements OnInit {

  public Correo: String;

  constructor(private _router: Router, private _peticionesservice: PeticionesRecuperarPasswordService, private menuCrl: MenuController) { 
    this.Correo = "";
  }

  ngOnInit() {
    this.menuCrl.enable(false);
  }

  formEnviarCSubmit(){
    // this._peticionesservice.Rpassword(this.Correo).subscribe(Response=>{
    //   console.log(Response);
      this._router.navigate(["/register-validation-code"]);
      //document.getElementById("formInicio").reset();
    // }, error=>{
    //   console.log("ERROR"+<any>error);
    // })  
  }
}
