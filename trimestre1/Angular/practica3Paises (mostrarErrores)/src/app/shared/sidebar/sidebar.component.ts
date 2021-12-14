import { Component, OnInit } from '@angular/core';
import { BuscaService } from '../../pais/services/busca.service';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent implements OnInit {

  constructor(private bsService:BuscaService) { }

  ngOnInit(): void {
  }

  paisEnBuscaYCaptura:string="";

  buscaPais(){
    this.bsService.buscarPais(this.paisEnBuscaYCaptura);
    this.paisEnBuscaYCaptura="";
  }

}
