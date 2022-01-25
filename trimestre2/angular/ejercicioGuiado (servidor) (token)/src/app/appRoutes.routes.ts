import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { ServersComponent } from './servers/servers/servers.component';
import { UsersComponent } from './users/users/users.component';
import { UserComponent } from './users/user/user.component';
import { EditServerComponent } from './servers/edit-server/edit-server.component';
import { ServerComponent } from './servers/server/server.component';
import { AuthGuard } from './services/authGuard.service';
import { CanDeactivateGuard } from './servers/edit-server/can-deactivate-guard.service';
import { ErrorPageComponent } from './error-page/error-page.component';
import { ServerResolver } from './servers/server/server-resolver.service';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';


const routes: Routes =[
  { path: '', component: LoginComponent },
  { path: 'register', component: RegisterComponent },
  { path: 'home', component: HomeComponent },
  { path: 'users', component: UsersComponent, children: [
    { path: ':id/:name', component: UserComponent },
  ]
  },
  { path: 'servers', component: ServersComponent, canActivateChild: [AuthGuard],children: [
    { path: ':id/edit', component: EditServerComponent, canDeactivate: [CanDeactivateGuard],resolve: { server: ServerResolver }},
    { path: ':id', canActivate:[AuthGuard], component: ServerComponent }
  ]
  },
  { path: 'not-found', component: ErrorPageComponent, data: {message: 'Ooopsi! Page not found.'} },
  { path: '**', redirectTo: '/not-found'}
];

@NgModule({
    imports: [
        RouterModule.forRoot( routes )
    ],
    exports: [
        RouterModule
    ]
})

export class AppRoutingModule {}
