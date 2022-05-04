import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { ILoginForm } from '../../interface/ILoginForm.interface';

@Injectable({
  providedIn: 'root'
})
export class LoginService {
  url=`${environment.backendURL}/api/authuser`;
  constructor(private http: HttpClient, private router:Router) { }

  postLogin(data:ILoginForm):Observable<any>{
    return this.http.post(this.url, data);
  }
  loggedIn(){
    return !!sessionStorage.getItem('x-token');
  }
  loggoud(){
    sessionStorage.removeItem('x-token');
    this.router.navigate(['/login']);
  }
  getToken(){
    return sessionStorage.getItem('x-token');
  }
  getSession(){
    return sessionStorage.getItem('x-token');
  }
  getNombre(){
    return sessionStorage.getItem('usuario');
  }
}
