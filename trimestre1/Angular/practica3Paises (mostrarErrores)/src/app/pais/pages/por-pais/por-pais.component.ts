import { Component, OnInit } from '@angular/core';
import { BuscaService } from '../../services/busca.service';

@Component({
  selector: 'app-por-pais',
  templateUrl: './por-pais.component.html',
  styleUrls: ['./por-pais.component.css']
})
export class PorPaisComponent implements OnInit {

  constructor(private bsService:BuscaService) { }

  termino:string="";

  ngOnInit(): void {
  }

  get isError(){
    return this.bsService.tieneError;
  }

  get resultado(){
    return this.bsService.resultado;
  }

  buscaPais(termino:string){
    this.termino=termino;
    this.bsService.buscarPais(this.termino)
  }

}
