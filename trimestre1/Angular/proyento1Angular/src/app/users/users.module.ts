import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UsersComponent } from './users/users.component';
import { AnadirUsuarioComponent } from './anadir-usuario/anadir-usuario.component';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';


@NgModule({
  declarations: [
    UsersComponent,
    AnadirUsuarioComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    RouterModule
  ],
  exports:[
    UsersComponent
  ]
})
export class UsersModule { }
