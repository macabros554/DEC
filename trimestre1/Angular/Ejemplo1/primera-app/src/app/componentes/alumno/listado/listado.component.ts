import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-listado',
  templateUrl: './listado.component.html',
  styleUrls: ['./listado.component.css']
})
export class ListadoComponent implements OnInit {

listaAlumnos: string[] =["Fran","Adela","Juaquin","Rafa","Cristina"];
constructor() { }
eliminado:string[]=[];
eliminar():void{
this.eliminado.push(this.listaAlumnos[0]);
this.listaAlumnos.splice(0,1);
}

agregar():void{
  this.listaAlumnos.push(this.eliminado[0]);
  this.eliminado.splice(0,1);
  }

ngOnInit(): void {
}

}
