import { Component } from '@angular/core';


@Component({
  selector: 'app-contador',
  template:`
  <h1>{{title}}</h1>

  <label>Salto entre numeros </label> <label> {{saltador}} </label>
  <button (click)="salta(+1)">+1</button><button (click)="salta(-1)">-1</button><br>

  <button (click)="acumula(+saltador)">Sumar</button><br>
  <p>{{acumulador}}</p>
  <button (click)="acumula(-saltador)">Restar</button><br>

  <button (click)="reiniciar()">Reiniciar</button><br>`
})
export class ContadorComponent{
  title: string = 'Acumulador';
  acumulador: number = 0 ;
  saltador: number = 0 ;

  salta(incremento: number){
    this.saltador += incremento;
  }

  acumula(incremento: number){
    this.acumulador += incremento;
  }

  reiniciar(){
    this.acumulador = 0;
    this.saltador = 0;
  }
}
