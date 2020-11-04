import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-new-password',
  templateUrl: './new-password.page.html',
  styleUrls: ['./new-password.page.scss'],
})
export class NewPasswordPage implements OnInit {

  public Password: any;

  constructor( private _router: Router) {
    this.Password = {
      npassword: "",
      cnpassword: ""
    };
   }

  ngOnInit() {
  }
}
