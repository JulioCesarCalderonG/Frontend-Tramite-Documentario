import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { urlBack } from '../api/apiTramite';

@Injectable({
  providedIn: 'root'
})
export class EjemploDocumentoService {
  url = `${urlBack}/ejemplodocumento`
  constructor(private http: HttpClient) { }

  getEjemploDocumento(id:string):Observable<any>{
    return this.http.get(`${this.url}/${id}`);
  }
  getEjemploDocumentoUnico(id:string):Observable<any>{
    return this.http.get(`${this.url}/unico/${id}`);
  }
  postEjemploDocumento(data:FormData):Observable<any>{
    return this.http.post(this.url,data);
  }
  deleteEjemploDocumento(id:string):Observable<any>{
    return this.http.delete(`${this.url}/${id}`);
  }
}
