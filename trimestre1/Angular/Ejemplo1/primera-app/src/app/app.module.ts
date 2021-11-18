import { AlumnoComponent } from './componentes/alumno/alumno.component';
import { AlumnosModule } from './componentes/alumnos.module';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';


@NgModule({
  declarations: [
    AppComponent
  ],
  exports:[
    AlumnoComponent
  ],
  imports: [
    BrowserModule,
    AlumnosModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
