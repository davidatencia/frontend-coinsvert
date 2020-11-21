import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.page.html',
  styleUrls: ['./menu.page.scss'],
})
export class MenuPage implements OnInit {

  public prueba: any[] = Array(20);
  public slider: any;
  public condicion: String;

  constructor(private _router: Router) { 
    this.condicion= "Utransacciones";
    this.slider=0;
  }

  ngOnInit() {
    console.log("oninit");
  }
}
