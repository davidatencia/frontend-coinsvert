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

  test(){
    console.log('Testing')
    const buttons = document.getElementsByClassName("button")
    if(buttons[0].classList.contains("clicked")){
      buttons[0].classList.remove("clicked")
      buttons[1].classList.add("clicked")
    } else {
      buttons[0].classList.add("clicked")
      buttons[1].classList.remove("clicked")
    }
  }

}
