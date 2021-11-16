import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  //template:'<h2>{{title}}</h2>',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title: string = 'Acumulador';
  acumulador: number = 0 ;
  sumar(): void{
    this.acumulador +=1;
  }
  restar(): void{
    this.acumulador -=1;
  }
  acumula(incremento: number){
    this.acumulador += incremento;
  }

}
