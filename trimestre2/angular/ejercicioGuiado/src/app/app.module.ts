import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
//este es el routing automatico pero como cree otro lo comento y pongo el otro
//import { AppRoutingModule } from './app-routing.module';
import { AppRoutingModule } from './appRoutes.routes';
import { AppComponent } from './app.component';
import { UsersModule } from './users/users.module';
import { ServersModule } from './servers/servers.module';
import { HomeComponent } from './home/home.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { ServersService } from './servers/servers.service';
import { AuthGuard } from './services/authGuard.service';
import { AuthService } from './services/auth.service';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    PageNotFoundComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    UsersModule,
    ServersModule
  ],
  providers: [ServersService, AuthGuard, AuthService],
  bootstrap: [AppComponent]
})
export class AppModule { }
