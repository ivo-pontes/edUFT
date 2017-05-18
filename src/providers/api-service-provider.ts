import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';

/*
  Generated class for the ApiServiceProvider provider.

  See https://angular.io/docs/ts/latest/guide/dependency-injection.html
  for more info on providers and Angular 2 DI.
*/
@Injectable()
export class ApiServiceProvider {

  dataObrasAcademicas: any;
  dataObrasAnoAnterior: any;
  dataObrasAnoAtual: any;
  dataOutrasObras: any;
  dataLivro: any;
  dataAutor: any;
  respFavorito: any;
  
  constructor(public http: Http) {
    console.log('ApiServiceProvider');
  }

  loadObrasAcademicas()
  {
    if (this.dataObrasAcademicas) 
    {
      return Promise.resolve( this.dataObrasAcademicas );
    }
    // Dont have the data yet
    return new Promise(resolve => {
      this.http.get('http://localhost:8000/api/livros/')
        .map(res => res.json())
        .subscribe(data => {
          this.dataObrasAcademicas = data;
          resolve( this.dataObrasAcademicas);
        });
    });
  }  


  loadObrasAnoAnterior()
  {
    if (this.dataObrasAnoAnterior) 
    {
      return Promise.resolve( this.dataObrasAnoAnterior );
    }
    // Dont have the data yet
    return new Promise(resolve => {
      this.http.get('http://localhost:8000/api/livros/')
        .map(res => res.json())
        .subscribe( data => {
          this.dataObrasAnoAnterior = data;
          resolve( this.dataObrasAnoAnterior);
        });
    });
  } 

  loadObrasAnoAtual()
  {
    if (this.dataObrasAnoAtual) 
    {
      return Promise.resolve( this.dataObrasAnoAtual );
    }
    // Dont have the data yet
    return new Promise(resolve => {
      this.http.get('http://localhost:8000/api/livros/')
        .map(res => res.json())
        .subscribe(data => {
          this.dataObrasAnoAtual = data;
          resolve( this.dataObrasAnoAtual);
        });
    });
  } 

  loadOutrasObras()
  {
    if (this.dataOutrasObras) 
    {
      return Promise.resolve( this.dataOutrasObras);
    }
    // Dont have the data yet
    return new Promise(resolve => {
      this.http.get('http://localhost:8000/api/livros/')
        .map(res => res.json())
        .subscribe(data => {
          this.dataOutrasObras = data;
          resolve( this.dataOutrasObras);
        });
    });
  } 

  buscarLivro(id)
  {
    if (this.dataLivro) 
    {
      return Promise.resolve(this.dataLivro);
    }
    // Dont have the data yet
    return new Promise(resolve => {
      this.http.get('http://localhost:8000/api/livros/'+id)
        .map(res => res.json()['livro'])
        .subscribe((data: any) => {
          this.dataLivro = data;
          resolve( this.dataLivro);
        });
    });
  }

  buscarAutor(id)
  {
    if (this.dataAutor) 
    {
      return Promise.resolve(this.dataAutor);
    }
    // Dont have the data yet
    return new Promise(resolve => {
      this.http.get('http://localhost:8000/api/autores/'+id)
        .map(res => res.json()['autor'])
        .subscribe((data: any) => {
          this.dataAutor = data;
          resolve( this.dataAutor);
        });
    });
  }

  addFavoritos(id,user)
  {
    if (this.respFavorito) 
    {
      return Promise.resolve(this.respFavorito);
    }
    // Dont have the data yet
    return new Promise(resolve => {
      this.http.get('http://localhost:8000/api/favoritos/'+id+'/user/'+user)
        .map(res => res.json())
        .subscribe((data: any) => {
          this.respFavorito = data;
          resolve( this.respFavorito);
        });
    });
  }

}
