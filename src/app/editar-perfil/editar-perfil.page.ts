import { Component, OnInit } from '@angular/core';
import { PeticionesEditarPerfilService } from '../services/EditarPerfilServices';

@Component({
  selector: 'app-editar-perfil',
  templateUrl: './editar-perfil.page.html',
  styleUrls: ['./editar-perfil.page.scss'],
})
export class EditarPerfilPage implements OnInit {

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
  //   this._peticionesservice.EditarInformacion(this.User).subscribe(Response=>{
  //   this.condicion="inicio"; 
  //   document.getElementById("formRegistro").reset();
  //   console.log(Response);
  //   }, error=>{
  //     console.log("ERROR"+<any>error);
  //   })
  }

}
