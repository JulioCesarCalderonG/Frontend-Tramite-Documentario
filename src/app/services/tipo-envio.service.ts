import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { urlBack } from '../api/apiTramite';

@Injectable({
  providedIn: 'root'
})
export class TipoEnvioService {
  url = `${urlBack}/tipoenvio`
  constructor(private http: HttpClient) { }

  getTipoEnvio():Observable<any>{
    return this.http.get(this.url);
  }
}
