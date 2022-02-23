import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { LibroService } from '../../services/libro.service';
import { Doc } from '../../interfaces/libroBibli';
import { Storage } from '@ionic/storage-angular';
import { Injectable } from '@angular/core';
import { StorageService } from '../services/storage.service';


@Injectable({
  providedIn: 'root'
})
@Component({
  selector: 'app-detalles',
  templateUrl: './detalles.page.html',
  styleUrls: ['./detalles.page.scss'],
})
export class DetallesPage implements OnInit {

  private _storage: Storage | null = null;
  estrella:boolean=false;

  constructor(private route: ActivatedRoute,private bibliotecaService:LibroService,private storage: StorageService) { }

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

  anadirStorage(key:string,value:any){
    this.storage.setStorage(key,value);
    this.estrella=true;
  }

  borrarStorage(key:string){
    this.storage.remover(key);
    this.estrella=false;
  }


}
