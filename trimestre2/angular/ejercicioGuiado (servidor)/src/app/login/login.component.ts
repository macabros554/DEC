import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html'
})
export class LoginComponent implements OnInit {

  constructor(private router: Router, private authService: AuthService) { }

  ngOnInit(): void {
  }

  email!: string;
  password!: string;

  login() {
    //const user = { email: this.email, password: this.password };
    this.authService.login(this.email,this.password)
      .subscribe( resp => {
        console.log(resp);
        localStorage.setItem('jwt',JSON.stringify(resp));
        this.router.navigateByUrl('/servers');
      })

  }
}
