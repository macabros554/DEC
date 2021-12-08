import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Gif, SeartGifInteface } from './interface/gifs.interfaces';

@Injectable({
  providedIn: 'root'
})
export class GifsServiceService {

  arrayGifs:Gif[]=[];
  gifs:Gif[]=[];
  historia:string[]=[];
  apiKey:string="FAuZ9TQU9fLYBwGjZ1sNJ1F8YEzwT8kL";
  enlace:string="https://api.giphy.com/v1/gifs/search";

  get historial(){
    return this.historia;
  }

  constructor(private http:HttpClient) { }

  listaGifsBuscados (query: string){


    if (!this.historia.includes(query)) {
      this.historia.unshift(query);

      if (this.historia.length==11) {
        this.historia.splice(9,1)
      }
    }

    const params = new HttpParams()
    .set('api_key', this.apiKey)
    .set('limit', '10')
    .set('q', query );

    //this.HttpClient.get<SearchGifsInterface>(`${this.urlBase}/search?api_key=${this.api_Key}&q=${query}&limit=10`)
    this.http.get<SeartGifInteface>(this.enlace,{params:params})
    .subscribe((resp)=>{
    console.log(resp);
    console.log("LLEGA");
    this.arrayGifs=resp.data;

    })
    return this.arrayGifs;

  }



  //nota: api.giphy.com/v1/gifs/search?api_key=FAuZ9TQU9fLYBwGjZ1sNJ1F8YEzwT8kL&q=cats
}
