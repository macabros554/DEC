import { Component, OnInit } from '@angular/core';
import { Doc, LibroBibri } from '../interfaces/libroBibli';
import { LibroService } from '../services/libro.service';
import { BarcodeScanner, BarcodeScannerOptions } from "@ionic-native/barcode-scanner/ngx";
import { Router } from '@angular/router';




@Component({
  selector: 'app-biblioteca',
  templateUrl: './biblioteca.page.html',
  styleUrls: ['./biblioteca.page.scss'],
})
export class BibliotecaPage implements OnInit {

  searchTerm = '';
  looking = false;

  encodedData: any;
  scannedBarCode: {};
  barcodeScannerOptions: BarcodeScannerOptions;

  constructor(private bibliotecaService:LibroService,private scanner: BarcodeScanner, private route: Router) {

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

  listaLibros:Doc[];

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


}
