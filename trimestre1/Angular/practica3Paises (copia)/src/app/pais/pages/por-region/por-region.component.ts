import { Component, OnInit } from '@angular/core';
import { BuscaService } from '../../services/busca.service';

@Component({
  selector: 'app-por-region',
  templateUrl: './por-region.component.html',
  styleUrls: ['./por-region.component.css']
})
export class PorRegionComponent implements OnInit {

  constructor(private bsService:BuscaService) { }

  regionB:string="";

  ngOnInit(): void {
  }


  get resultado(){
    return this.bsService.resultado;
  }


  buscaPais(){
    this.bsService.buscarPais(this.regionB)
  }

}
