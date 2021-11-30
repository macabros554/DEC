import { Component, Input, OnInit } from '@angular/core';
import { GifsServiceService } from '../../gifs-service.service';

@Component({
  selector: 'app-busqueda',
  templateUrl: './busqueda.component.html'
})
export class BusquedaComponent implements OnInit {

  historieta:string="";

  constructor(private bsService:GifsServiceService) { }

  ngOnInit(): void {
  }

  agregar(){
    this.bsService.buscarGifs(this.historieta);
  }
}
