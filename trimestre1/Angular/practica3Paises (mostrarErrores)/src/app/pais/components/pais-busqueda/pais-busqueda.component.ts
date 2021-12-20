import { Component,EventEmitter, OnInit, Output } from '@angular/core';
import { BuscaService } from '../../services/busca.service';

@Component({
  selector: 'app-pais-busqueda',
  templateUrl: './pais-busqueda.component.html',
  styles: [
  ]
})
export class PaisBusquedaComponent implements OnInit {
  @Output() onEnter: EventEmitter<string> = new EventEmitter();
  paisB: string="";
  constructor(private bsService:BuscaService) { }

  get isError(){
    return this.bsService.tieneError;
  }

  ngOnInit(): void {
  }

  buscaPais(){
    this.onEnter.emit(this.paisB)
  }

}
