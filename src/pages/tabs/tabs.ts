import { Component } from '@angular/core';

import { HomePage } from '../home/home';
import { FavoritosPage } from '../favoritos/favoritos';
import { SacolaPage } from '../sacola/sacola';

import { NavController, NavParams } from 'ionic-angular';
import { Auth, User } from '@ionic/cloud-angular';
import { LoginPage } from '../login/login';


@Component({
  templateUrl: 'tabs.html'
})
export class TabsPage {
  // this tells the tabs component which Pages
  // should be each tab's root Page
  tab1Root: any = HomePage;
  tab2Root: any = FavoritosPage;
  tab3Root: any = SacolaPage;

  constructor(public navCtrl: NavController, public navParams: NavParams, public user:User, public auth:Auth) 
  {

  }


}
