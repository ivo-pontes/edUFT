import { Component } from '@angular/core';

import { NavController, NavParams } from 'ionic-angular';
import { ApiServiceProvider } from '../../providers/api-service-provider';
import { MostrarItem } from '../mostrarItem/mostrarItem';
import { Auth, User } from '@ionic/cloud-angular';
import { LoginPage } from '../login/login';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html',
  providers: [ApiServiceProvider]
})
export class HomePage {

  selectedItem: any;
  icons: string[];
  items: Array<{id: string, title: string, imagem: string}>;

  constructor(public navCtrl: NavController, public navParams: NavParams, public apiServiceProvider: ApiServiceProvider, public user:User, public auth:Auth) {
    // If we navigated to this page, we will have an item available as a nav param
    console.log(user);
    this.selectedItem = navParams.get('item');

    this.carregarObrasAcademicas();

  }

  itemTapped(item) {
    // That's right, we're pushing to ourselves!
    this.navCtrl.push(MostrarItem, {
      id: item
    });
  }
  carregarObrasAcademicas()
  {
       this.apiServiceProvider.loadObrasAcademicas()
      .then(datax => {

        this.items = [];

        console.log(datax);

        for(let obj of datax)
        {
          this.items.push({
            id: obj.id,
            title: obj.titulo,
            imagem: obj.imagem
          });
        }
      });
  }

  sair()
  {
    this.auth.logout();
    this.navCtrl.setRoot(LoginPage);
  }
}
