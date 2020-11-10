import { Component, OnInit } from '@angular/core';
import { PeticionesEditarPerfilService } from '../../services/EditarPerfilServices';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.page.html',
  styleUrls: ['./profile.page.scss'],
})
export class ProfilePage implements OnInit {

  private User: any;

  constructor(private _peticionesservice: PeticionesEditarPerfilService) { 
    this.User={
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
  }

  formEditarPSubmit(){
    this._peticionesservice.EditarInformacion(this.User).subscribe(Response=>{
    //   document.getElementById("formRegistro").reset();
    console.log(Response);
    }, error=>{
      console.log("ERROR"+<any>error);
    });
    }
}
