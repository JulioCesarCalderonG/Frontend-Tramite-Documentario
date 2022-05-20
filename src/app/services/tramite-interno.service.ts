import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { urlBack } from '../api/apiTramite';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TramiteInternoService {
  url = `${urlBack}/tramiteinterno`
  constructor(private http: HttpClient) { }

  getTramiteInternos():Observable<any>{
    return this.http.get(this.url);
  }
  postTramiteInterno(data:FormData):Observable<any>{
    return this.http.post(this.url,data);
  }
}
