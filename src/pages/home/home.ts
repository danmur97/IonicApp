import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  irPagina(){
    this.navCtrl.push('MiPaginaPage');
  }
  constructor(public navCtrl: NavController) {

  }

}
