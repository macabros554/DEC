import { Component, OnInit } from '@angular/core';
import { ServiUsuarioService } from '../../servicios/servi-usuario.service';
import { InterfaceUsuario } from '../../interfaces/interfaz-usuario';

@Component({
  selector: 'app-anadir-usuario',
  templateUrl: './anadir-usuario.component.html'
})
export class AnadirUsuarioComponent implements OnInit {

  constructor(private bsService:ServiUsuarioService) { }

  elNombre:string="";
  elEmail:string="";

  usuario!:InterfaceUsuario;


  get listasuarios(){
    return this.bsService.resultado;
  }

  ngOnInit(): void {
  }

  enviarUsuario(){
    let nuevoUsuario:InterfaceUsuario={
      id:0,
      name:this.elNombre,
      email:this.elEmail}
    this.bsService.addUser(nuevoUsuario).subscribe();


  }

}
