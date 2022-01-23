import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { UsersService } from '../services/user.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html'
})
export class LoginComponent implements OnInit {

  email!: string;
  password!: string;

  constructor(private route: ActivatedRoute,private userService:UsersService,public router: Router) { }

  ngOnInit(): void {
  }

  login() {
    const user = { email: this.email, password: this.password };
    this.userService.login(user).subscribe(
      data => {
        this.userService.setToken(data.token);
        this.router.navigateByUrl('/');
      },
      error => {
        console.log(error);
      });
  }
}
