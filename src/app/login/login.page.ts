import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {
  condicion: String;

  constructor(private _router: Router) { 
    this.condicion= "inicio";
  }

  ngOnInit() {
  }

  loginButton(){
    const slider = document.getElementById("slider");
    slider.classList.remove("clicked");
    const logo = document.querySelector("#imgLogo");
    logo.setAttribute("src", "../../assets/icon/coinsvert imagotipo-10.png");
  }
  registerButton(){
    const slider = document.getElementById("slider");
    slider.classList.add("clicked");
    const logo = document.querySelector("#imgLogo");
    logo.setAttribute("src", "../../assets/coinsvrtlogos/coinsvert horizontal-24.svg");

  }
  
}
