import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { ApiServiceProvider } from '../../providers/api-service-provider';
import { Auth, User, UserDetails, IDetailedError } from '@ionic/cloud-angular';
import { MostrarAutor } from '../mostrarAutor/mostrarAutor';

//import {Livro} from '../../app/models/livro-model';
/*
  Generated class for the MostrarItemPage page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/


@Component({
  selector: 'mostrarItem',
  templateUrl: 'mostrarItem.html',
  providers: [ApiServiceProvider]
})
export class MostrarItem {

  livro: any = {};
  id: any;
  resposta: any;

  constructor(public navCtrl: NavController, public navParams: NavParams, public apiServiceProvider: ApiServiceProvider, public user:User, public auth:Auth) 
  {
    this.id = navParams.get('id');
        
    this.apiServiceProvider.buscarLivro(this.id)
        .then(datax =>  { this.livro = datax });
  }

  itemTapped(item) {
    // That's right, we're pushing to ourselves!
    this.navCtrl.push(MostrarAutor, {
      id: item
    });
  }

  addFavoritos(id, user)
  {
    this.apiServiceProvider.addFavoritos(id, user)
      .then(datax =>  { this.resposta = datax });
  }

}

  