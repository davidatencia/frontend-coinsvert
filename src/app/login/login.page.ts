import { Component, OnInit } from '@angular/core';
import {PeticionesService} from '../services/LoginServices'

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

  condicion: String;
  public User: any;
  public newUser: any;

  constructor(private _peticionesservice: PeticionesService) { 
    this.condicion= "inicio";
    this.User = {
      username: "",
      password: ""
    };
    this.newUser = {
      rusername: "",
      remail: "",
      rpais: "",
      restado: "",
      rciudad: "",
      rTel: "",
      rPassword: ""
    }

  }

  ngOnInit() {
    setTimeout(()=>{ 
      this.condicion="login";
    }, 3000);
  }

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

  // Inicio De Sesion

  formIniciarSubmit(){
    this._peticionesservice.addUser(this.User).subscribe(Response=>{
      console.log(Response);
      // document.getElementById("formInicio").reset();
    }, error=>{
      console.log("ERROR"+<any>error);
    })
  }

  // Registrarse

  formRegistroSubmit(){
    this._peticionesservice.addUser(this.newUser).subscribe(Response=>{
    this.condicion="inicio"; 
    //document.getElementById("formRegistro").reset();
    console.log(Response);
    }, error=>{
      console.log("ERROR"+<any>error);
    })
  }
}
