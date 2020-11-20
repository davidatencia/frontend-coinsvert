import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.page.html',
  styleUrls: ['./menu.page.scss'],
})
export class MenuPage implements OnInit {

  prueba: any[] = Array(20);


  condicion: String;
  constructor(private _router: Router) { 
    this.condicion= "Utransacciones";
  }

  ngOnInit() {
    console.log("oninit");
  }

  UltimasTransaccionesButton(){
    let slider = document.querySelector(".slider");
    slider.classList.remove("clicked");
    console.log("UltimasTransaccionesButton");
  }
  PreciosButton(){
    let slider = document.querySelector(".slider");
    slider.classList.add("clicked");
    console.log("PreciosButton");
  }
}
