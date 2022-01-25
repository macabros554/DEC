import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../services/auth.service';
import Swal from 'sweetalert2'

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
    this.authService.login(this.email,this.password)
      .subscribe( resp => {
        //console.log(resp);
        localStorage.setItem('jwt',JSON.stringify(resp));
        console.log(localStorage.getItem("jwt"));
        Swal.fire('Has iniciado sesion con exito');
        this.router.navigateByUrl('/servers');
      },(error) => {
          Swal.fire('Nombre o contraseña incorrecta',
          "Intentelo de nuevo");
      });

  }
}
