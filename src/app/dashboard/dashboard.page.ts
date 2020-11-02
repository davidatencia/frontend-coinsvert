import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.page.html',
  styleUrls: ['./dashboard.page.scss'],
})
export class DashboardPage implements OnInit {
  constructor() { }

  ngOnInit() {
  }
  test(){
    console.log('Testing')
    const buttons = document.getElementsByClassName("switch-button")
    if(buttons[0].classList.contains("clicked")){
      buttons[0].classList.remove("clicked")
      buttons[1].classList.add("clicked")
    } else {
      buttons[0].classList.add("clicked")
      buttons[1].classList.remove("clicked")
    }
  }
}