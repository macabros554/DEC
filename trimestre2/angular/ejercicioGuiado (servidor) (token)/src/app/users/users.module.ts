import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UsersComponent } from './users/users.component';
import { UserComponent } from './user/user.component';
import { AppRoutingModule } from '../appRoutes.routes';




@NgModule({
  declarations: [
    UsersComponent,
    UserComponent
  ],
  imports: [
    CommonModule,
    AppRoutingModule
  ],
  exports: [
    UsersComponent
  ]
})
export class UsersModule { }
