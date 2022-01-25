import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { environment } from "src/environments/environment";
import Swal from 'sweetalert2'

@Injectable()
export class AuthService {

  constructor(private http: HttpClient) {}

  /*comprobarToken(){
    console.log("na");
    const url = `${this.baseUrl}/tokenes`;
    //let elToken =  localStorage.getItem("jwt");
    fetch(url, {
      headers: {
          'X-CSRF-TOKEN': window.localStorage.getItem("jwt") || "dadad"// <--- aquí el token
      },
      method: "GET"
  })
  .then(r => r.json())
  .then(respuesta => {
    console.log(respuesta);
  });
  }*/

  ngOnInit(): void {
   /*setTimeout(() => {
    console.log("holiwis");
    this.comprobarToken();
    }, 100);*/
  }

  private baseUrl: string = environment.baseUrl;
  loggedIn = false;

  isAuthenticated() {
    const promise = new Promise(
      (resolve, reject) => {
        setTimeout(() => {
          resolve(this.loggedIn);
        }, 800);
      }
    );
    return promise;
  }

  login(email:string,password:string){
    const url = `${this.baseUrl}/auth/login`;
    const body = {
      'email': email,
      'password': password
    }
    return this.http.post(url, body);
  }



/**
 * {
      "email": "333@gmail.com",
      "password": "cz4p6h6Wk9.9CUw"
    }
 */

/**
 * login() {
 *  this.loggedIn = true;
  }
  */

  logout() {
    this.loggedIn = false;
  }
}
