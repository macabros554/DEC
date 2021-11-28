import { Injectable } from '@angular/core';
import { Jugador } from '../interfaces/componentes.interface';

@Injectable() export class ComponentesService {

  private _Jugadores: Jugador[]=[{
    nombre: "macabros",
    numero: 554,
    equipo: "Sevilla"
  },{
    nombre: "Jesus",
    numero: 2,
    equipo: "Betis"
  },{
    nombre: "Kevin",
    numero: 4,
    equipo: "Madrid"
  },{
    nombre: "Pepe",
    numero: 2,
    equipo: "Barcelona"
  }];

  get jugadores():Jugador[]{
    return [...this._Jugadores];
  }

  constructor() { console.log("Servicio tope chulo iniciado");}

  agregarJugador(jugador: Jugador){
    this._Jugadores.push(jugador);
}

}

