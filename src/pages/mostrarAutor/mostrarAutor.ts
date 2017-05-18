import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { ApiServiceProvider } from '../../providers/api-service-provider';
/*
  Generated class for the MostrarAutor page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  selector: 'page-mostrarAutor',
  templateUrl: 'mostrarAutor.html',
  providers: [ApiServiceProvider]
})
export class MostrarAutor {

  autor: any = {};
  id: any;

  constructor(public navCtrl: NavController, public navParams: NavParams, public apiServiceProvider: ApiServiceProvider) {

    this.id = navParams.get('id');

      console.log("uat");
        
    this.apiServiceProvider.buscarAutor(this.id)
        .then(datax =>  { this.autor = datax });
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad MostrarAutor');
  }


}
