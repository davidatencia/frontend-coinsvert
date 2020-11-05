import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.page.html',
  styleUrls: ['./dashboard.page.scss'],
})
export class DashboardPage implements OnInit {

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