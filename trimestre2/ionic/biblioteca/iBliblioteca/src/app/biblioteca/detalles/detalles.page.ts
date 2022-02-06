import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { LibroService } from '../../services/libro.service';
import { Doc } from '../../interfaces/libroBibli';

@Component({
  selector: 'app-detalles',
  templateUrl: './detalles.page.html',
  styleUrls: ['./detalles.page.scss'],
})
export class DetallesPage implements OnInit {

  constructor(private route: ActivatedRoute,private bibliotecaService:LibroService) { }

  elLibro:Doc[];

  ngOnInit() {
    console.log(this.route.snapshot.paramMap.get('id'));
    this.buscarLibros();

  }

  buscarLibros(){
    this.bibliotecaService.recuperarLibro(this.route.snapshot.paramMap.get('id'))
    .subscribe( resp => {
      console.log(resp.docs);
      this.elLibro=resp.docs;
    },(error) => {
        console.log("po como lo digo, no das ni una")
    });
  }


}
