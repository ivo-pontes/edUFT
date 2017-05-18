import { NgModule, ErrorHandler } from '@angular/core';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { TabsPage } from '../pages/tabs/tabs';
import { CommonModule } from '@angular/common'; 
import { IonicStorageModule } from '@ionic/storage';
import { CloudSettings, CloudModule } from '@ionic/cloud-angular';

import { SacolaPage } from '../pages/sacola/sacola';
import { FavoritosPage } from '../pages/favoritos/favoritos';
import { ObrasAnoAnterior } from '../pages/obrasAnoAnterior/obrasAnoAnterior';
import { ObrasAnoAtual } from '../pages/obrasAnoAtual/obrasAnoAtual';
import { ObrasAcademicas } from '../pages/obrasAcademicas/obrasAcademicas';
import { OutrasObras } from '../pages/outrasObras/outrasObras';
import { MostrarItem } from '../pages/mostrarItem/mostrarItem';
import { MostrarAutor } from '../pages/mostrarAutor/mostrarAutor';
import { LoginPage } from '../pages/login/login';

const cloudSettings: CloudSettings = {
  'core': {
    'app_id': '00b8aab6'
  }
};

@NgModule({
  declarations: [
    MyApp,
    TabsPage,
    HomePage,
    SacolaPage,
    FavoritosPage,
    ObrasAnoAnterior,
    ObrasAnoAtual,
    ObrasAcademicas,
    OutrasObras,
    MostrarItem,
    MostrarAutor,
    LoginPage
  ],
  imports: [
    CommonModule,
    IonicStorageModule.forRoot(),
    IonicModule.forRoot(MyApp,{tabsPlacement: 'top'}),
    CloudModule.forRoot(cloudSettings)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    TabsPage,
    HomePage,
    SacolaPage,
    FavoritosPage,
    ObrasAnoAnterior,
    ObrasAnoAtual,
    ObrasAcademicas,
    OutrasObras,
    MostrarItem,
    MostrarAutor,
    LoginPage
  ],
  providers: [{provide: ErrorHandler, useClass: IonicErrorHandler}]
})
export class AppModule {}
