import { Component, OnInit } from '@angular/core';
import { Jugador } from '../interfaces/componentes.interface';
import { ComponentesService } from '../services/componentes.service';

@Component({
  selector: 'app-buscar-jugador',
  templateUrl: './buscar-jugador.component.html',
  styleUrls: ['./buscar-jugador.component.css']
})
export class BuscarJugadorComponent implements OnInit {

  nombre:string =""

  get jugadores():Jugador[]{
    return this.bsService.jugadores;
  }
  jugadoresEncontrados:Jugador[]=[]

  constructor(private bsService:ComponentesService) { }

  ngOnInit(): void {
  }

  buscar(){
    this.jugadoresEncontrados=[]
    for (let i = 0; i < this.jugadores.length; i++) {
      if (this.jugadores[i].nombre==this.nombre) {
        this.jugadoresEncontrados.push(this.jugadores[i])
      }

    }
  }

}
