import { Component, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';
import { NewPasswordPage } from '../pages/new-password/new-password.page'

@Component({
  selector: 'app-envios',
  templateUrl: './envios.page.html',
  styleUrls: ['./envios.page.scss'],
})
export class EnviosPage implements OnInit {

  constructor(public navCtrl: NavController) { 

  // (click)=newPassword(){
  //   this.navCtrl.push(NewPasswordPage);
  // }
}
  ngOnInit() {
  }

}
