import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivateChild, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import jwtDecode from 'jwt-decode';
import { LoginService } from '../auth/login/login.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuardDirector implements CanActivateChild {
  constructor(private authService: LoginService, private router: Router) {
  }
  canActivateChild(next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): boolean {
    if (this.authService.getSession() !== null) {
      const dataDecode: any = this.decodeToken();
      const date = new Date();
      // Comprobar que no esta caducado el token
      if (dataDecode.exp < date.getTime() / 1000) {
        return this.redirect();
      }
      if (dataDecode.cargo !== 'ADMINISTRADOR') {
        return this.redirect();
      }
      return true;
    }
    return this.redirect();
    /* if (this.authService.loggedIn()) {
    return true;
  }
  this.router.navigate(['/login']);
  return false; */
  }
  redirect() {
    this.router.navigate(['/auth']);
    return false;
  }
  decodeToken() {
    return jwtDecode(`${this.authService.getSession()}`);
  }
  
}
