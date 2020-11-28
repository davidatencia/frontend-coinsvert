import { Component, OnInit } from '@angular/core';
import { PeticionesLoginService } from '../services/LoginServices';
import { Router } from '@angular/router';
import { MenuController } from '@ionic/angular';
@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

  //cambio de pantallas
  public condicion: String;
  
  //login
  public User: any;
  
  //nuevo usuario
  public newUser: any;

  //alerta
  public alerta: String;
  public mensaje_alerta: any;

  constructor(private _peticionesservice: PeticionesLoginService, private _router: Router, private menu: MenuController) { 
    this.condicion= "inicio";
    this.alerta="oculta";
    this.mensaje_alerta = {
      titulo1: "",
      titulo2: "",
      nota: "",
      icono:""
    }
    this.User = {
      address: "",
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
    this.menu.enable(false);
    setTimeout(()=>{ 
      this.condicion="login";
    }, 3000);
  }

  // ----------------------------- Inicio De Sesion

  formIniciarSubmit(){
    this._peticionesservice.getUser(this.User).subscribe(Response=>{

      if(Response.usuario=="conectado"){
      //mostrar alerta
      this.mensaje_alerta= {
        titulo1: "Bienvenido",
        titulo2: "",
        nota: "",
        icono: "ok"
      }
      this.alerta="activa";
      
      //redireccionar
      setTimeout(()=>{ 
        this.alerta="oculta";
        this._router.navigate(["/menu"]);
      }, 2000);

      //limpiar variables
      this.User = {
        address: "",
        password: ""
      }
      }else if(Response.usuario == "Usuario no registrado"){
        //mostrar alerta
        this.mensaje_alerta= {
          titulo1: "Usuario no registrado",
          titulo2: "",
          nota: "Por favor, registrese para acceder a nuestros servicios",
          icono: "error"
        }
        this.alerta="activa";
          
        //redireccionar
        setTimeout(()=>{ 
          this.alerta="oculta";
          this.condicion = "register";
          this.registerButton();
        }, 5000);
       }else if(Response.error == "contraseña incorrecta"){
        //mostrar alerta
        this.mensaje_alerta= {
          titulo1: "Contraseña Incorrecta",
          titulo2: "",
          nota: "Por favor, verifique la contraseña e intentelo nuevamente",
          icono: "error"
        }
        this.alerta="activa";
        
        //redireccionar
        setTimeout(()=>{ 
          this.alerta="oculta";
        }, 4000);
        }else{
          //mostrar alerta
          this.mensaje_alerta= {
            titulo1: "Occurrio un error",
            titulo2: "",
            nota: "Disculpe",
            icono: "error"
          }
          this.alerta="activa";
        
          //redireccionar
          setTimeout(()=>{ 
            this.alerta="oculta";
          }, 4000);
       }

      console.log(Response);
        
      // document.getElementById("formInicio").reset();
    }, error=>{
      console.log("ERROR"+<any>error);
    })
  }

  // ------------------------------ Registrarse

  formRegistroSubmit(){
    this._peticionesservice.addUser(this.newUser).subscribe(Response=>{

      if(Response.resp=="ok" && Response.registro=="exitoso" && Response.usuario=="creado"){
        //mostrar alerta
        this.mensaje_alerta= {
          titulo1: "Registro",
          titulo2: "Satisfactorio",
          nota: "Por Favor, Verifique el codigo en la siguiente ventana para completar el registro inicial",
          icono: "ok"
        }
        this.alerta="activa";
        
        //redireccionar
        setTimeout(()=>{ 
          this.alerta="oculta";
          this._router.navigate(["/register-validation-code"]);
        }, 4000);
        
        //limpiar variables
        this.newUser = {
          nick_name: "",
          email: "",
          contry_id: "",
          state_id: "",
          city_id: "",
          phone: "",
          password: ""
         }

         console.log(Response);
       }else if(Response.usuario=="Usuario ya existente"){
          //mostrar alerta
          this.mensaje_alerta= {
            titulo1: "El correo electronico digitado",
            titulo2: "ya se encuentra registrado",
            nota: "Por Favor, Verifique e intentelo de nuevo",
            icono: "error"
          }
          this.alerta="activa";
          
          //redireccionar
          setTimeout(()=>{ 
            this.alerta="oculta";
          }, 5000);
       }else{
          //mostrar alerta
          this.mensaje_alerta= {
            titulo1: "Occurrio un error",
            titulo2: "",
            nota: "Disculpe",
            icono: "error"
          }
          this.alerta="activa";
        
          //redireccionar
          setTimeout(()=>{ 
            this.alerta="oculta";
          }, 4000);
       }

      }, error=>{
         console.log("ERROR"+<any>error);
     })
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
