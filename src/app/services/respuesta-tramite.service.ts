import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { urlBack } from '../api/apiTramite';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class RespuestaTramiteService {
  url = `${urlBack}/respuestatramite`
  constructor(private http: HttpClient) { }
  getRespuestas():Observable<any>{
    return this.http.get(this.url);
  }
}
