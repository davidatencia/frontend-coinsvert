import { Component, OnInit } from '@angular/core';
import { MenuController } from '@ionic/angular';
@Component({
  selector: 'app-menu',
  templateUrl: './menu.page.html',
  styleUrls: ['./menu.page.scss'],
})
export class MenuPage implements OnInit {

  public prueba: any[] = Array(20);
  public slider: number;
  public condicion: String;

  constructor(private menuCrl: MenuController ) { 
    this.condicion= "Utransacciones";
    this.slider=0;
  }

  ngOnInit() {
    this.menuCrl.enable(true);
  }

  openMenu(){
    this.menuCrl.toggle();
  }
}
