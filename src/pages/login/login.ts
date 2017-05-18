import { Component } from '@angular/core';
import { NavController, AlertController, LoadingController } from 'ionic-angular';
import { Auth, User, UserDetails, IDetailedError } from '@ionic/cloud-angular';
import { HomePage } from '../home/home';
import { TabsPage } from '../tabs/tabs';


@Component({
  selector: 'page-login',
  templateUrl: 'login.html'
})
export class LoginPage {

  showLogin:boolean = true;
  email:string = '';
  password:string = '';
  name:string = '';

  constructor(public navCtrl: NavController, public auth:Auth, public user: User, public alertCtrl: AlertController, public loadingCtrl: LoadingController) 
  {

  	if(this.auth.isAuthenticated())
  		this.navCtrl.setRoot(TabsPage);
  }

  ionViewDidLoad() {
    console.log('Hello LoginPage Page');
  }

  login()
  {
    if(this.showLogin) 
    {
      console.log('process login');

      if(this.email === '' || this.password === '') 
      {
        let alert = this.alertCtrl.create({
          title:'Erro', 
          subTitle:'Preencher os campos',
          buttons:['OK']
        });
        alert.present();
        return;
      }     

      let loader = this.loadingCtrl.create({
        content: "Logando..."
      });

      loader.present();
      
      this.auth.login('basic', {'email':this.email, 'password':this.password}).then(() => {
        loader.dismissAll();
        this.navCtrl.setRoot(HomePage);                
      }, (erro) => {
        loader.dismissAll();
        console.log(erro.message);

        let erros = '';
        if(erro.message === 'UNPROCESSABLE ENTITY') erros += 'Email isn\'t valid.<br/>';
        if(erro.message === 'UNAUTHORIZED') erros += 'Password necessário.<br/>';

        let alert = this.alertCtrl.create({
          title:'Erro', 
          subTitle: erros,
          buttons:['OK']
        });
        alert.present();
      });
    } else 
      this.showLogin = true;
  }

  registrar() 
  {
    if(!this.showLogin) 
    {
      console.log('process register');

      if(this.name === '' || this.email === '' || this.password === '') 
      {
        let alert = this.alertCtrl.create({
          title:'Erro', 
          subTitle:'Preencher os campos',
          buttons:['OK']
        });
        alert.present();
        return;
      }

      let details: UserDetails = {'email':this.email, 'password':this.password, 'name':this.name};
      //console.log(details);
      
      let loader = this.loadingCtrl.create({
        content: "Registering your account..."
      });
      loader.present();

      this.auth.signup(details).then(() => {
        this.auth.login('basic', {'email':details.email, 'password':details.password}).then(() => {
          loader.dismissAll();
          this.navCtrl.setRoot(HomePage);
        });

      }, (err:IDetailedError<string[]>) => {
        loader.dismissAll();
        let erros = '';
        for(let e of err.details) {
          console.log(e);
          if(e === 'required_email') erros += 'Email necessário.<br/>';
          if(e === 'required_password') erros += 'Password necessário.<br/>';
          if(e === 'conflict_email') erros += 'Email já cadastrado.<br/>';
          if(e === 'invalid_email') erros += 'Email inválido.';
        }
        let alert = this.alertCtrl.create({
          title:'Erro', 
          subTitle: erros,
          buttons:['OK']
        });
        alert.present();
      });
     
    } else {
      this.showLogin = false;
    }
  }


  home() 
  {
  	this.navCtrl.setRoot(HomePage);
    this.navCtrl.setRoot(TabsPage);
  }
}