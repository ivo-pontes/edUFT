import { Component } from '@angular/core';

import { NavController, NavParams } from 'ionic-angular';
import { ApiServiceProvider } from '../../providers/api-service-provider';
import { MostrarItem } from '../mostrarItem/mostrarItem';

@Component({
  selector: 'page-obrasAnoAnterior',
  templateUrl: 'obrasAnoAnterior.html',
  providers: [ApiServiceProvider]
})
export class ObrasAnoAnterior {

  selectedItem: any;
  icons: string[];
  items: Array<{id: string, title: string, imagem: string}>;

  constructor(public navCtrl: NavController, public navParams: NavParams, public apiServiceProvider: ApiServiceProvider) {
    // If we navigated to this page, we will have an item available as a nav param
    this.selectedItem = navParams.get('item');

    this.carregarObrasAnoAnterior();

  }

  itemTapped(item) {
    // That's right, we're pushing to ourselves!
    this.navCtrl.push(MostrarItem, {
      id: item
    });
  }

  carregarObrasAnoAnterior()
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
