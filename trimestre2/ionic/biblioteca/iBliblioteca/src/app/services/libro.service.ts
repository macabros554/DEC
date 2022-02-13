import { Injectable } from '@angular/core';
import { HttpClientModule,HttpClient,HttpParams } from '@angular/common/http';
import { Doc, LibroBibri } from '../interfaces/libroBibli';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class LibroService {

  constructor(private httpClient:HttpClient) { }

  baseUrl:string="https://openlibrary.org/search.json";

  nuevaURL:string="https://openlibrary.org/search.json?isbn=";

  buscarLibros(searchTerm):Observable<LibroBibri>{
    const params: HttpParams = new HttpParams()
    .set('title',searchTerm)
    .set('limit',10)
    const url = `${this.baseUrl}`;
    return this.httpClient.get<LibroBibri>(url,{params});
  }

  recuperarLibro(idLibro:string):Observable<LibroBibri>{
    const url = `${this.nuevaURL+idLibro}`;
    return this.httpClient.get<LibroBibri>(url);
  }


}
