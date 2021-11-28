import { Component, Input, OnInit } from '@angular/core';
import { Jugador } from '../interfaces/componentes.interface';
import { ComponentesService } from '../services/componentes.service';

@Component({
  selector: 'app-anadir',
  templateUrl: './anadir.component.html',
  styleUrls: ['./anadir.component.css']
})
export class AnadirComponent implements OnInit {

  @Input() nuevo: Jugador={nombre: '', numero: 0, equipo: "Sevilla"};

  constructor(private bsService:ComponentesService) { }

  ngOnInit(): void {
  }

  agregar(){
    this.bsService.agregarJugador(this.nuevo);
    this.nuevo={
      nombre: " ",
      numero: 0,
      equipo: "Sevilla"
    }
  }

  equipos: string[]=['Sevilla','Betis','Madrid','Barcelona'];

}
