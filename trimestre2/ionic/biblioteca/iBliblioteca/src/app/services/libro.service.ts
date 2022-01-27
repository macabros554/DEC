import { Injectable } from '@angular/core';
import { HttpClientModule,HttpClient } from '@angular/common/http';
import { Doc, LibroBibri } from '../interfaces/libroBibli';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class LibroService {

  constructor(private httpClient:HttpClient) { }

  baseUrl:string="https://openlibrary.org/search.json?q=naruto&limit=10";

  buscarLibros():Observable<LibroBibri>{
    const url = `${this.baseUrl}`;
    return this.httpClient.get<LibroBibri>(url);
  }


}
