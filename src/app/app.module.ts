import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import {FormsModule } from '@angular/forms';

//servicios
import { PeticionesCPasswordService } from './services/C_contraseña';
import { PeticionesLoginService } from './services/LoginServices';
import { PeticionesEditarPerfilService } from './services/PerfilServices';
import { PeticionesRecuperarPasswordService } from './services/RContraseña';
//servicios

import { IonicModule, IonicRouteStrategy } from '@ionic/angular';
// import { SplashScreen } from '@ionic-native/splash-screen/ngx';
// import { StatusBar } from '@ionic-native/status-bar/ngx';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ComponentModule } from './compartido/components.module';

@NgModule({
  declarations: [AppComponent],
  entryComponents: [],
  imports: [BrowserModule, IonicModule.forRoot(), AppRoutingModule, HttpClientModule, FormsModule, BrowserAnimationsModule, ComponentModule],
  providers: [
    PeticionesLoginService,
    PeticionesEditarPerfilService,
    PeticionesRecuperarPasswordService,
    PeticionesCPasswordService,
    // StatusBar,
    // SplashScreen,
    { provide: RouteReuseStrategy, useClass: IonicRouteStrategy }
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}
