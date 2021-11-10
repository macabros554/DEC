import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { PruebaComponenteComponent } from './componentes/prueba-componente/prueba-componente.component';
import { PruebitaComponent } from './componentes/pruebita/pruebita.component';

@NgModule({
  declarations: [
    AppComponent,
    PruebaComponenteComponent,
    PruebitaComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
