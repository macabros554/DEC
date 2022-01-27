import { Component, OnInit } from '@angular/core';
import { Doc, LibroBibri } from '../interfaces/libroBibli';
import { LibroService } from '../services/libro.service';



@Component({
  selector: 'app-biblioteca',
  templateUrl: './biblioteca.page.html',
  styleUrls: ['./biblioteca.page.scss'],
})
export class BibliotecaPage implements OnInit {

  constructor(private bibliotecaService:LibroService) { }

  listaLibros:Doc[];

  ngOnInit() {
    this.buscarLibros();
  }

  buscarLibros(){
    this.bibliotecaService.buscarLibros()
    .subscribe( resp => {
      console.log(resp)
      this.listaLibros=resp.docs;

    },(error) => {
        console.log("po como lo digo, no das ni una")
    });
  }


}
