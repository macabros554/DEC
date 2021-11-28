import { Component, Input, OnInit } from '@angular/core';
import { Jugador } from '../interfaces/componentes.interface';
import { ComponentesService } from '../services/componentes.service';

@Component({
  selector: 'app-jugadores',
  templateUrl: './jugadores.component.html',
  styleUrls: ['./jugadores.component.css']
})
export class JugadoresComponent implements OnInit {

  get jugadores():Jugador[]{
    return this.bsService.jugadores;
  }

  constructor(private bsService:ComponentesService) { }

  ngOnInit(): void {
  }
}
