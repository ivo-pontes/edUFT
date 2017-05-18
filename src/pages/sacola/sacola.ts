import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { Auth, User } from '@ionic/cloud-angular';
import { LoginPage } from '../login/login';

/*
  Generated class for the Sacola page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  selector: 'page-sacola',
  templateUrl: 'sacola.html'
})
export class SacolaPage {

  constructor(public navCtrl: NavController, public navParams: NavParams, public user:User, public auth:Auth) 
  {
    if(!this.auth.isAuthenticated())
      this.navCtrl.setRoot(LoginPage);
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad SacolaPage');
  }

  sair()
  {
    this.auth.logout();
    this.navCtrl.setRoot(LoginPage);
  }
}
