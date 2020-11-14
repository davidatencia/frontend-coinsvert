import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.page.html',
  styleUrls: ['./menu.page.scss'],
})
export class MenuPage implements OnInit {

  prueba: any[] = Array(20);

  condicion: String;
  constructor() { 
    this.condicion= "Utransacciones";
  }

  ngOnInit() {
  }


  loginButton(){
    let slider = document.querySelector(".slider");
    slider.classList.remove("clicked");
  }
  registerButton(){
    let slider = document.querySelector(".slider");
    slider.classList.add("clicked");
  }
}
