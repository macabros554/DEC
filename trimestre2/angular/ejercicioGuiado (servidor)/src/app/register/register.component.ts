import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styles: [
  ]
})
export class RegisterComponent implements OnInit {

  email!: string;
  password!: string;
  confirmPassword!: string;
  passwordError!: boolean;

  constructor() { }

  ngOnInit(): void {
  }

  register() {
    const user = { email: this.email, password: this.password };

  }

}
