import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { urlBack } from '../api/apiTramite';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DestinoInternoService {
  url = `${urlBack}/destinointerno`
  constructor(private http: HttpClient) { }

  getDestinosInternos(atendido:string | number):Observable<any>{
    return this.http.get(this.url,{
      params:{
        atendido
      }
    })
  }
}
