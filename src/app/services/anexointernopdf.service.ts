import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { urlBack } from '../api/apiTramite';

@Injectable({
  providedIn: 'root'
})
export class AnexointernopdfService {
  url = `${urlBack}`
  constructor(private http: HttpClient) { }

  getAnexoInterno(codigo:string):Observable<any>{
    return this.http.get(`${this.url}/anexointerno/${codigo}`);
  }
}
