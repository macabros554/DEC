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
import { CanDeactivateGuard } from './servers/edit-server/can-deactivate-guard.service';
import { ErrorPageComponent } from './error-page/error-page.component';
import { ServerResolver } from './servers/server/server-resolver.service';
import { FormsModule } from '@angular/forms';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    PageNotFoundComponent,
    ErrorPageComponent,
    LoginComponent,
    RegisterComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    UsersModule,
    ServersModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [ServersService, AuthGuard, AuthService, CanDeactivateGuard, ServerResolver],
  bootstrap: [AppComponent]
})
export class AppModule { }
