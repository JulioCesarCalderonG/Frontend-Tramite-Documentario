import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { urlBack } from '../api/apiTramite';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DetalledestinointernoService {
  url = `${urlBack}/detalledestinointerno`
  constructor(private http: HttpClient) { }

  getDetalleDestino(codigo:string):Observable<any>{
    return this.http.get(`${this.url}/${codigo}`);
  }
  postDetalleDestinoInterno(data:FormData):Observable<any>{
    return this.http.post(this.url,data)
  }
  getAnexoDetalle(codigo:string):Observable<any>{
    return this.http.get(`${urlBack}/respuestatramite/codigodoc/${codigo}`);
  }
}
