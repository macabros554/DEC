import { ContadorModule } from './../contador/contador.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NotasComponent } from './notas/notas.component';



@NgModule({
  declarations: [
    NotasComponent
  ],exports:[
    NotasComponent
  ],
  imports: [
    CommonModule,
    ContadorModule
  ]
})
export class ListasModule { }
