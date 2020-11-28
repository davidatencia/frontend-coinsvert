import { Component, OnInit } from '@angular/core';
import { MenuController } from '@ionic/angular';

@Component({
  selector: 'app-perfil-editado',
  templateUrl: './perfil-editado.page.html',
  styleUrls: ['./perfil-editado.page.scss'],
})
export class PerfilEditadoPage implements OnInit {

  constructor(private menuCrl: MenuController) { 

  }

  ngOnInit() {
    this.menuCrl.enable(true);
  }

  openMenu(){
    this.menuCrl.toggle();
  }
}
