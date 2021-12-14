import { Injectable } from '@angular/core';
import { HttpClientModule,HttpClient } from '@angular/common/http';
import { InterfaceGlobal } from '../interfaces/interface-global';


@Injectable({
  providedIn: 'root'
})
export class BuscaService {

  constructor(private httpClient:HttpClient) { }

  enlacePais:string="https://restcountries.com/v3.1/name/";
  enlaceCapital:string="https://restcountries.com/v3.1/capital/";
  enlaceRegion:string="https://restcountries.com/v3.1/region/";
  pais:string="";
  resultado:any=null;

  buscarPais(query:string){
    this.httpClient.get<InterfaceGlobal>(this.enlacePais+query).subscribe((resp) => {
      this.resultado = resp;
    })
  }

  buscarCapital(query:string){
    this.httpClient.get<InterfaceGlobal>(this.enlaceCapital+query).subscribe((resp) => {
      this.resultado = resp;
    })
  }

  buscarRegion(query:string){
    this.httpClient.get<InterfaceGlobal>(this.enlaceRegion+query).subscribe((resp) => {
      this.resultado = resp;
    })
  }

  verPais(alpha:string){

  }

}
