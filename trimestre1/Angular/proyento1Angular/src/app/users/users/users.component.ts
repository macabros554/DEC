import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ServiUsuarioService } from 'src/app/servicios/servi-usuario.service';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {

  constructor(private bsService:ServiUsuarioService) { }

  ngOnInit(): void {
    this.bsService.buscarUsuarios();
  }

  get usuarios(){
    return this.bsService.resultado;
  }
}
