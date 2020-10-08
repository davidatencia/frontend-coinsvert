import { Component, OnInit } from '@angular/core';
import {PeticionesService} from '../services/userService'

@Component({
  selector: 'app-singup',
  templateUrl: './singup.page.html',
  styleUrls: ['./singup.page.scss'],
})
export class SingupPage implements OnInit {
  public newUser: any;
  constructor(private _peticionesservice: PeticionesService) { 
    this.newUser = {
      name: "",
      username: "",
      password: ""
    };

  }

  ngOnInit() {
  }


  /* formSubmit(){
    this._peticionesservice.getUserList().subscribe(Response=>{
      console.log(Response);
    }, error=>{
      console.log("error de peticion")
      console.log(<any>error)
    })
  } */
  formSubmit(){
    this._peticionesservice.addUser(this.newUser).subscribe(Response=>{
      console.log(Response);
    }, error=>{
      console.log("error de peticion")
      console.log(<any>error)
    })
  }





}
