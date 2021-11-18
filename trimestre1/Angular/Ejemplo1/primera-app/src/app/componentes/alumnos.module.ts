import { ListasModule } from './alumno/listado/listas/listas.module';
import { ListadoComponent } from './alumno/listado/listado.component';
import { AlumnoComponent } from './alumno/alumno.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';


@NgModule({
   declarations:[
    AlumnoComponent,
    ListadoComponent
  ],
  exports:[
    AlumnoComponent,
    ListadoComponent
  ],
  imports: [
    CommonModule,
    ListasModule
  ]

})

export class AlumnosModule{};
