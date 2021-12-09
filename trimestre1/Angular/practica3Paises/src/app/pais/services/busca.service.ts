import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { InterfaceBusca } from '../interfaces/interface-busca';

@Injectable({
  providedIn: 'root'
})
export class BuscaService {


  paises:string[]=[];

  pais:string="";
  enlace:string="https://restcountries.com/v3.1/name/";

  get paisesEncontrados(){
    return this.paises;
  }

  constructor(private http:HttpClient) { }

  buscarPais(pais:string){
    const params = new HttpParams()
    .set('limit', '10')
    .set('q', pais );

    this.http.get<InterfaceBusca>(this.enlace,{params:params})
    .subscribe((resp)=>{
    console.log(resp);
    console.log("LLEGA");

    })
  }

}
