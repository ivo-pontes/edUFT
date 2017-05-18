import { Component } from '@angular/core'; 
import { NavController } from 'ionic-angular';
//import { Storage } from '@ionic/storage';
import { HomePage } from '../home/home';
import { LoginPage } from '../login/login';
import { Auth, User } from '@ionic/cloud-angular';

@Component({
  selector: 'page-favoritos',
  templateUrl: 'favoritos.html'
})

export class FavoritosPage {

  empty: any;
  resposta: any;

  constructor(public navCtrl: NavController, public user:User, public auth:Auth) 
  {
    console.log(user);

    if(!this.auth.isAuthenticated())
      this.navCtrl.setRoot(LoginPage);
    
    console.log(this.auth.isAuthenticated());
  }

  verOfertas()
  {
    this.empty = 0;

    this.navCtrl.push(HomePage, {
    });
  }

  login() 
  {
    this.navCtrl.setRoot(LoginPage);
  }

  sair()
  {
    this.auth.logout();
    this.navCtrl.setRoot(LoginPage);
  }

  alt()
  {

  }

}
