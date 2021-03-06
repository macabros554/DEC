import { Component, OnInit } from '@angular/core';
import { BuscaService } from '../../services/busca.service';

@Component({
  selector: 'app-por-pais',
  templateUrl: './por-pais.component.html',
  styleUrls: ['./por-pais.component.css']
})
export class PorPaisComponent implements OnInit {

  constructor(private bsService:BuscaService) { }

  pais:string="españa";

  ngOnInit(): void {
  }

  buscar(){
    this.bsService.buscarPais(this.pais)
  }
}
//https://restcountries.com/v3.1/name/{name}
