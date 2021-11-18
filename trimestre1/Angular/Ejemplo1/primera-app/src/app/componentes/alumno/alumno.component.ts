import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-alumno',
  templateUrl: './alumno.component.html',
  styleUrls: ['./alumno.component.css']
})
export class AlumnoComponent implements OnInit {

  nombre: string = "Fran Arroyo";
  edad: number = 21;

  get nombreMays(): string {
    return this.nombre.toUpperCase();
  };

  cambiarNombre(){
    this.nombre="Javi Lira";
  }
  cambiarEdad(){
    this.edad=19;
  }
  constructor() { }

  ngOnInit(): void {
  }

}
