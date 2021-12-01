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

  buscarGifs (query: string){

    if (!this.historia.includes(query)) {
      this.historia.unshift(query);
      if (this.historia.length==10) {
        this.historia.splice(9,1)
      }
    }
  }
}
