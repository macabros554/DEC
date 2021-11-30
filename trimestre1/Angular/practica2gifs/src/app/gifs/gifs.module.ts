import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GifsPagesComponent } from './gifs-pages/gifs-pages.component';
import { GifsServiceService } from './gifs-service.service';
import { BusquedaComponent } from './gifs-pages/busqueda/busqueda.component';
import { ResultadosComponent } from './gifs-pages/resultados/resultados.component';
import { FormsModule } from '@angular/forms';



@NgModule({
  declarations: [
    GifsPagesComponent,
    BusquedaComponent,
    ResultadosComponent
  ],
  exports: [
    GifsPagesComponent
  ],
  imports: [
    CommonModule,
    FormsModule
  ],
  providers: [
    GifsServiceService
  ]
})
export class GifsModule { }
