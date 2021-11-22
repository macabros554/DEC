import { AlumnoComponent } from './componentes/alumno/alumno.component';
import { AlumnosModule } from './componentes/alumnos.module';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { BrawlStartsModule } from './brawl-starts/brawl-starts.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  exports:[
    AlumnoComponent
  ],
  imports: [
    BrowserModule,
    AlumnosModule,
    BrawlStartsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
