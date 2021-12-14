import { Component, OnInit } from '@angular/core';
import { Country } from '../../interfaces/pais.interface';
import { PaisServiceService } from '../../services/pais-service.service';

@Component({
  selector: 'app-por-region',
  templateUrl: './por-region.component.html',
  styles: [
  ]
})
export class PorRegionComponent implements OnInit {

  paises: Country[]=[];
  constructor(private paisService:PaisServiceService) { }
  termino: string='';
  ngOnInit(): void {
  }
  buscar( termino :string){
    this.termino=termino;
    this.paisService.buscarRegion(this.termino)
    .subscribe(resp=>
      {
        this.paises = resp;
        console.log(this.paises);
      })
  }

}
