import { Component, OnInit } from '@angular/core';
import { MenuController } from '@ionic/angular';

@Component({
  selector: 'app-envios',
  templateUrl: './envios.page.html',
  styleUrls: ['./envios.page.scss'],
})
export class EnviosPage implements OnInit {

  constructor(private menuCrl: MenuController) { }

  ngOnInit() {
    this.menuCrl.enable(true);
  }

  //abrir menu lateral
  openMenu(){
    this.menuCrl.toggle();
  }
}
