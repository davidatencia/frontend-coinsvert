import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {
  constructor() { }

  ngOnInit() {
  }
  loginButton(){
    const slider = document.getElementById("slider")
    slider.classList.remove("clicked")
    
  }
  registerButton(){
    const slider = document.getElementById("slider")
    slider.classList.add("clicked")

  }
  
}
