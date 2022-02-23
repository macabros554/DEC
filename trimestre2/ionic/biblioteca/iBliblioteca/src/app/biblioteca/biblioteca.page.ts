import { Component, OnInit } from '@angular/core';
import { Doc, LibroBibri } from '../interfaces/libroBibli';
import { LibroService } from '../services/libro.service';
import { BarcodeScanner, BarcodeScannerOptions } from "@ionic-native/barcode-scanner/ngx";
import { Router } from '@angular/router';
import { StorageService } from './services/storage.service';




@Component({
  selector: 'app-biblioteca',
  templateUrl: './biblioteca.page.html',
  styleUrls: ['./biblioteca.page.scss'],
})
export class BibliotecaPage implements OnInit {

  searchTerm = '';
  looking:boolean = false;
  mostrar:boolean=false;
  listaLibros:Doc[];
  encodedData: any;
  scannedBarCode: {};
  barcodeScannerOptions: BarcodeScannerOptions;

  listafavoritos:String[]=[];

  constructor(private bibliotecaService:LibroService,private scanner: BarcodeScanner, private route: Router,private storage: StorageService) {

      this.encodedData = "Programming isn't about what you know";

      this.barcodeScannerOptions = {
        showTorchButton: true,
        showFlipCameraButton: true
      };
   }

  scanBRcode() {
  this.scanner.scan().then(res => {
      this.scannedBarCode = res;
      this.route.navigate(['/biblioteca/detalles',res.text]);
    }).catch(err => {
      alert(err);
    });
  }



  ngOnInit() {

  }

  buscarLibros(event){

     const valor: string = event.detail.value;

    if ( valor.length === 0 ) {
      this.looking = false;
      this.listaLibros = [];
      return;
    }

    this.looking = false;

    this.bibliotecaService.buscarLibros(valor)
    .subscribe( resp => {
      console.log(resp)
      this.listaLibros=resp.docs;
       this.looking = true;

    },(error) => {
        console.log("po como lo digo, no das ni una")
    });
  }

  mostrarFavoritos(){
    console.log(this.favoritos);
    this.mostrar=true;
  }

  get favoritos(){
      return this.storage.listafavoritos;
  }

}
