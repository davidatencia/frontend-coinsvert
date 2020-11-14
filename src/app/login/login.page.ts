import { Component, OnInit } from '@angular/core';
import { PeticionesLoginService } from '../services/LoginServices';
import { Router } from '@angular/router';
@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

  condicion: String;
  public User: any;
  public newUser: any;

  constructor(private _peticionesservice: PeticionesLoginService, private _router: Router) { 
    this.condicion= "inicio";
    this.User = {
      nick_name: "",
      password: ""
    };
    this.newUser = {
      nick_name: "",
      email: "",
      contry_id: "",
      state_id: "",
      city_id: "",
      phone: "",
      password: ""
    }

  }

  ngOnInit() {
    setTimeout(()=>{ 
      this.condicion="login";
    }, 3000);
  }

  // ----------------------------- Inicio De Sesion

  formIniciarSubmit(){
    // this._peticionesservice.getUser(this.User).subscribe(Response=>{
    //   console.log(Response);
      this._router.navigate(["/menu"]);
      // document.getElementById("formInicio").reset();
    // }, error=>{
    //   console.log("ERROR"+<any>error);
    // })
  }

  // ------------------------------ Registrarse

  formRegistroSubmit(){
    // this._peticionesservice.addUser(this.newUser).subscribe(Response=>{
       this._router.navigate(["/register-validation-code"]);
    // document.getElementById("formRegistro").reset();
    // console.log(Response);
    // }, error=>{
    //   console.log("ERROR"+<any>error);
    // })
  }

  //SLIDER Y CAMBIO DE IMAGEN
  loginButton(){
    let slider = document.querySelector(".slider");
    slider.classList.remove("clicked");
    let logo = document.querySelector("#imgLogo");
    logo.setAttribute("src", "../../assets/icon/coinsvert imagotipo-10.png");
  }
  registerButton(){
    let slider = document.querySelector(".slider");
    slider.classList.add("clicked");
    let logo = document.querySelector("#imgLogo");
    logo.setAttribute("src", "../../assets/coinsvrtlogos/coinsvert horizontal-24.svg");
  }
}
