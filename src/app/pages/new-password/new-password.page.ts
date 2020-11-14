import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { PeticionesCPasswordService } from '../../services/C_contraseña';

@Component({
  selector: 'app-new-password',
  templateUrl: './new-password.page.html',
  styleUrls: ['./new-password.page.scss'],
})
export class NewPasswordPage implements OnInit {

  public Password: any;
  public cpassword: any;

  constructor(private _peticionesservice: PeticionesCPasswordService, private _router: Router) {
    this.Password = {
      npassword: ""
    };
   }

  ngOnInit() {
  }

  formrecureperarCSubmit(){
    // this._peticionesservice.Cpassword(this.Password).subscribe(Response=>{
      // console.log(Response);
      this._router.navigate(["/login"]);
      //document.getElementById("formInicio").reset();
    // }, error=>{
    //   console.log("ERROR"+<any>error);
    // })
  }
}
