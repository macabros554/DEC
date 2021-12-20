import { Component, OnInit } from '@angular/core';
import { BuscaService } from '../../services/busca.service';

@Component({
  selector: 'app-por-capital',
  templateUrl: './por-capital.component.html',
  styleUrls: ['./por-capital.component.css']
})
export class PorCapitalComponent implements OnInit {

  constructor(private bsService:BuscaService) { }

  termino:string="";

  ngOnInit(): void {
  }

  get resultado(){
    return this.bsService.resultado;
  }

  buscaPais(termino:string){
    this.termino=termino;
    this.bsService.buscarCapital(this.termino)
  }

}
