import { Component, OnInit } from '@angular/core';
import { MenuController } from '@ionic/angular';
import { PeticionesEditarPerfilService } from '../../services/PerfilServices';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.page.html',
  styleUrls: ['./profile.page.scss'],
})
export class ProfilePage implements OnInit {

  public EUser: any;

  constructor(private _peticionesservice: PeticionesEditarPerfilService, private menuCrl: MenuController) { 
    this.EUser={
      Nombre: "",
      Apellido: "",
      Email: "",
      Sexo: "",
      Direccion: "",
      Estado: "",
      Ciudad: "",
      Tmovil: ""
    }
  }

  ngOnInit() {
    this.menuCrl.enable(true);
  }

  openMenu(){
    this.menuCrl.toggle();
  }

  formEditarPSubmit(){
    // this._peticionesservice.EditarInformacion(this.EUser).subscribe(Response=>{
    //   document.getElementById("formRegistro").reset();
  //     console.log(Response);
  //   }, error=>{
  //     console.log("ERROR"+<any>error);
  //   });
  }
}
