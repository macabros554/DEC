import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class GifsServiceService {

  private historia:string[]=[];

  get historial(){
    return this.historia;
  }

  constructor() { }
  verdad:boolean=true;
  buscarGifs (query: string){

    this.verdad=true;

    this.historia.splice(9,1)

    for (let i = 0; i < this.historia.length; i++) {
      if (this.historia[i]==query) {
        this.verdad=false;
      }
    }
    if (this.verdad) {
      this.historia.unshift(query);
    }

  }
}
