import { Component, OnInit } from '@angular/core';
import { MenuController } from '@ionic/angular';

@Component({
  selector: 'app-movimientos',
  templateUrl: './movimientos.page.html',
  styleUrls: ['./movimientos.page.scss'],
})
export class MovimientosPage implements OnInit {

  public Movimientos: any;
  prueba: any[] = Array(20);
   
  constructor(private menuCrl: MenuController) {
    this.Movimientos = {
      Fechai: "",
      Fechaf: "",
      Tmovimiento: "",
      Moneda: "",
      Valormin: "",
      Valormax: ""
    }
   }

  ngOnInit() {
    this.menuCrl.enable(true);
  }

  openMenu(){
    this.menuCrl.toggle();
  }

  formMovimientosSubmit(){

  }
}
