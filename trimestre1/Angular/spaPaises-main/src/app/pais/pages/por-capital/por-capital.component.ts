import { Component, OnInit } from '@angular/core';
import { Country } from '../../interfaces/pais.interface';
import { PaisServiceService } from '../../services/pais-service.service';

@Component({
  selector: 'app-por-capital',
  templateUrl: './por-capital.component.html',
  styles: [
  ]
})
export class PorCapitalComponent implements OnInit {

  paises: Country[]=[];
  constructor(private paisService:PaisServiceService) { }
  termino: string='';
  ngOnInit(): void {
  }
  buscar( termino :string){
    this.termino=termino;
    this.paisService.buscarCapital(this.termino)
    .subscribe(resp=>
      {
        this.paises = resp;
        console.log(this.paises);
      })

  }

}
