import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TabBarComponent } from './tab-bar/tab-bar.component';
import { MenuComponent } from './menu/menu.component';
import { IonicModule } from '@ionic/angular';
import { RouterModule } from '@angular/router';

@NgModule({
    declarations: [
        TabBarComponent,
        MenuComponent
    ],
    exports: [
        TabBarComponent,
        MenuComponent
    ],
    imports: [
        CommonModule,
        IonicModule,
        RouterModule
    ]
})
export class ComponentModule { }