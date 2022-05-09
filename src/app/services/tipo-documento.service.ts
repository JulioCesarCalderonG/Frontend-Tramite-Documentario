import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { urlBack } from '../api/apiTramite';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TipoDocumentoService {
  url = `${urlBack}/tipodocumento`
  constructor(private http: HttpClient) { }

  getTipoDocumento(habilitado:number):Observable<any>{
    return this.http.get(this.url,{params:{habilitado}})
  }
}
