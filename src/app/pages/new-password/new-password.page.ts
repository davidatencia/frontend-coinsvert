import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MenuController } from '@ionic/angular';
import { PeticionesCPasswordService } from '../../services/C_contraseña';

@Component({
  selector: 'app-new-password',
  templateUrl: './new-password.page.html',
  styleUrls: ['./new-password.page.scss'],
})
export class NewPasswordPage implements OnInit {

  public Password: any;
  public cpassword: any;

  constructor(private _peticionesservice: PeticionesCPasswordService, private _router: Router, private menuCrl: MenuController) {
    this.Password = {
      npassword: ""
    };
   }

  ngOnInit() {
    this.menuCrl.enable(false);
  }

  formrecureperarCSubmit(){
    // this._peticionesservice.Cpassword(this.Password).subscribe(Response=>{
    //   console.log(Response);
      this._router.navigate(["/login"]);
    // }, error=>{
    //   console.log("ERROR"+<any>error);
    // })
  }
}
