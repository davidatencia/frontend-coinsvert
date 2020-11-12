import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-movimientos',
  templateUrl: './movimientos.page.html',
  styleUrls: ['./movimientos.page.scss'],
})
export class MovimientosPage implements OnInit {

  public Movimientos: any;
  prueba: any[] = Array(20);
   
  constructor() {
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
  }

  formMovimientosSubmit(){

  }
}
