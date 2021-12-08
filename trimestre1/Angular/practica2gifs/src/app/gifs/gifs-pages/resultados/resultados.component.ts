import { HttpParams } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { GifsServiceService } from '../../gifs-service.service';

@Component({
  selector: 'app-resultados',
  templateUrl: './resultados.component.html'
})
export class ResultadosComponent implements OnInit {

  constructor(private bsService:GifsServiceService) {}

  ngOnInit(): void {
  }

  get listaGifsBuscados(){
    return this.bsService.arrayGifs;
  }
}
