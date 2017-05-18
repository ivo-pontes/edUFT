import { Component, ViewChild } from '@angular/core';
import { Nav, Platform } from 'ionic-angular';
import { StatusBar, Splashscreen } from 'ionic-native';

import { TabsPage } from '../pages/tabs/tabs';
import { ObrasAcademicas } from '../pages/obrasAcademicas/obrasAcademicas';
import { ObrasAnoAnterior } from '../pages/obrasAnoAnterior/obrasAnoAnterior';
import { ObrasAnoAtual } from '../pages/obrasAnoAtual/obrasAnoAtual';
import { OutrasObras } from '../pages/outrasObras/outrasObras';
import { Auth } from '@ionic/cloud-angular';
import { LoginPage } from '../pages/login/login';



@Component({
  templateUrl: 'app.html'
})

export class MyApp {
  @ViewChild(Nav) nav: Nav;

  rootPage: any = TabsPage;

  pages: Array<{title: string, component: any}>;

  constructor(public platform: Platform, public auth:Auth) {
    this.initializeApp();

    // used for an example of ngFor and navigation
    //Menu lateral
    this.pages = [
      { title: 'Home', component: TabsPage  },
      { title: 'Login', component: LoginPage},
      { title: 'Obras Acadêmicas', component: ObrasAcademicas  },
      { title: 'Obras 2017', component: ObrasAnoAtual },
      { title: 'Obras 2016', component: ObrasAnoAnterior },
      { title: 'Outras Obras', component: OutrasObras }
    ];
  }

  initializeApp() {
    this.platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      StatusBar.styleDefault();
      Splashscreen.hide();
    });
  }

  openPage(page) {
    // Reset the content nav to have just this page
    // we wouldn't want the back button to show in this scenario
    this.nav.setRoot(page.component);
  }
}
