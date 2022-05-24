import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { urlBack } from '../api/apiTramite';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SeguimientoInternoService {
  url = `${urlBack}/seguimientointerno`
  constructor(private http: HttpClient) { }

  getSeguimiento(codigo:string):Observable<any>{
    return this.http.get(`${this.url}/${codigo}`);
  }
}
