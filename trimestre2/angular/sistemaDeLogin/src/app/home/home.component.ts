import { Component, OnInit } from '@angular/core';
import { UsersService } from '../services/user.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html'
})
export class HomeComponent implements OnInit {

  constructor(public userService: UsersService) { }

  ngOnInit(): void {
    this.getUserLogged();
  }

  getUserLogged() {
    this.userService.getUser().subscribe(user => {
      console.log(user);
    });
  }

  //this.cookies.delete("token");
}
