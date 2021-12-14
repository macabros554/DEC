import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Country } from '../interfaces/pais.interface';

@Injectable({
  providedIn: 'root'
})
export class PaisServiceService {
  private apiUrl:string ='https://restcountries.com/v3.1';
  paises: Country[]=[];

  constructor( private httpService: HttpClient) { }

  buscarPais(termino:string): Observable<Country[]>{
    let url: string = `${this.apiUrl}/name/${termino}`;
    return this.httpService.get<Country[]>(url);

  }

  buscarCapital(termino:string): Observable<Country[]>{
    let url: string = `${this.apiUrl}/capital/${termino}`;
    return this.httpService.get<Country[]>(url);
  }

  buscarRegion(termino:string): Observable<Country[]>{
    let url: string = `${this.apiUrl}/region/${termino}`;
    return this.httpService.get<Country[]>(url);
  }

}
