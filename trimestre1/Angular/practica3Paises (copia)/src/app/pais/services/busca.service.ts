import { Injectable } from '@angular/core';
import { HttpClientModule,HttpClient } from '@angular/common/http';
import { InterfaceBuscaPais } from '../interfaces/interface-buscaPais';
import { InterfaceBuscaCapital } from '../interfaces/interface-busca-capital';
import { InterfaceBuscaRegion } from '../interfaces/interface-busca-region';


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
    this.httpClient.get<InterfaceBuscaPais>(this.enlacePais+query).subscribe((resp) => {
      console.log(resp);
      this.resultado = resp;
    })
  }

  buscarCapital(query:string){
    this.httpClient.get<InterfaceBuscaCapital>(this.enlaceCapital+query).subscribe((resp) => {
      console.log(resp);
      this.resultado = resp;
    })
  }

  buscarRegion(query:string){
    this.httpClient.get<InterfaceBuscaRegion>(this.enlaceRegion+query).subscribe((resp) => {
      console.log(resp);
      this.resultado = resp;
    })
  }

}
