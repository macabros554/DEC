import { Injectable } from "@angular/core";
import { ActivatedRouteSnapshot, CanActivate, RouterStateSnapshot, Router, Routes } from '@angular/router';
import { Observable } from "rxjs";
import { AuthService } from './auth.service';

@Injectable()
export class AuthGuard implements CanActivate {

  constructor(private authService: AuthService,private router: Router) { }

  /*canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<boolean> | Promise<boolean> | boolean | any{
    return this.authService.isAuthenticated().then((authenticated) => {
        if (authenticated) {
          return true;
        } else {
          this.router.navigate(['/']);
          return ;
        }
      });
  }*/

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<boolean> | Promise<boolean> | boolean | any{
    return true
  }

}
