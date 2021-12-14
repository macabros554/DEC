import { Component,EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-pais-busqueda',
  templateUrl: './pais-busqueda.component.html',
  styles: [
  ]
})
export class PaisBusquedaComponent implements OnInit {
  @Output() onEnter: EventEmitter<string> = new EventEmitter();
  paisB: string="";
  constructor() { }

  ngOnInit(): void {
  }

  buscaPais(){
    this.onEnter.emit(this.paisB)
  }

}
