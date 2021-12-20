import { Injectable } from '@angular/core';
import { InterfaceUsuario } from '../interfaces/interfaz-usuario';
import { HttpClientModule,HttpClient,HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class ServiUsuarioService {

  constructor(private http:HttpClient) { }

  enlace:string="http://localhost:3000/users";
  resultado!:InterfaceUsuario[];

  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
  };

  get resultados(){
    return this.resultado;
  }

  buscarUsuarios(){
    this.http.get<InterfaceUsuario[]>(this.enlace).subscribe((resp) => {
      this.resultado = resp;
    })
  }

  addUser(user:InterfaceUsuario):Observable<InterfaceUsuario>{
    console.log(user);
   return this.http.post<InterfaceUsuario>(this.enlace,user,this.httpOptions);
  }

}
