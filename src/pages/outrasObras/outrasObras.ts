import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { ApiServiceProvider } from '../../providers/api-service-provider';
import { MostrarItem } from '../mostrarItem/mostrarItem';

/*
  Generated class for the OutrasObras page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  selector: 'page-outrasObras',
  templateUrl: 'outrasObras.html',
  providers: [ApiServiceProvider]
})
export class OutrasObras {

  selectedItem: any;
  icons: string[];
  items: Array<{id: string, title: string, imagem: string}>;

  constructor(public navCtrl: NavController, public navParams: NavParams, public apiServiceProvider: ApiServiceProvider) {
    // If we navigated to this page, we will have an item available as a nav param
    this.selectedItem = navParams.get('item');

    this.carregarOutrasObras();
  }

  itemTapped(item) {
    // That's right, we're pushing to ourselves!
    this.navCtrl.push(MostrarItem, {
      id: item
    });
  }

  carregarOutrasObras()
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

}
