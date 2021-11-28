import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { MainPageComponent } from './componentes/main-page/main-page.component';
import { AnadirComponent } from './componentes/anadir/anadir.component';
import { JugadoresComponent } from './componentes/jugadores/jugadores.component';
import { ComponentesService } from './componentes/services/componentes.service';
import { FormsModule } from '@angular/forms';
import { BuscarJugadorComponent } from './componentes/buscar-jugador/buscar-jugador.component';

@NgModule({
  declarations: [
    AppComponent,
    MainPageComponent,
    AnadirComponent,
    JugadoresComponent,
    BuscarJugadorComponent
  ],
  exports:[
    MainPageComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [
    ComponentesService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
