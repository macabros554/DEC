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
  tieneError:boolean=false;

  buscarPais(query:string){
    this.tieneError=false;
    this.httpClient.get<InterfaceGlobal>(this.enlacePais+query).subscribe((resp) => {
      this.resultado = resp;
    },(err) =>{
      this.tieneError=true;
    })
  }

  buscarCapital(query:string){
    this.tieneError=false;
    this.httpClient.get<InterfaceGlobal>(this.enlaceCapital+query).subscribe((resp) => {
      this.resultado = resp;
    },(err) =>{
      this.tieneError=true;
    })
  }

  buscarRegion(query:string){
    this.tieneError=false;
    this.httpClient.get<InterfaceGlobal>(this.enlaceRegion+query).subscribe((resp) => {
      this.resultado = resp;
    },(err) =>{
      this.tieneError=true;
    })
  }

  verPais(alpha:string){

  }

}
