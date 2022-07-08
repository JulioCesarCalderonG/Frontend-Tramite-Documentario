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

  postDetalleDestinoInterno(data:FormData):Observable<any>{
    return this.http.post(this.url,data)
  }
}
