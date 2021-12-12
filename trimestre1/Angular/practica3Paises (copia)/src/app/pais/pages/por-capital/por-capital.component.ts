import { Component, OnInit } from '@angular/core';
import { BuscaService } from '../../services/busca.service';

@Component({
  selector: 'app-por-capital',
  templateUrl: './por-capital.component.html',
  styleUrls: ['./por-capital.component.css']
})
export class PorCapitalComponent implements OnInit {

  constructor(private bsService:BuscaService) { }

  capitalB:string="";

  ngOnInit(): void {
  }


  get resultado(){
    return this.bsService.resultado;
  }


  buscaPais(){
    this.bsService.buscarPais(this.capitalB)
  }

}
