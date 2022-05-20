import { urlBack } from './../api/apiTramite';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DocumentoInternoService {
  url = `${urlBack}/documentointerno`
  constructor(private http: HttpClient) { }

  getDocumentosInternos(derivado:string):Observable<any>{
    return this.http.get(this.url,{params:{
      estadoDerivado:derivado
    }});
  }
  postDocumento(data:FormData):Observable<any>{
    return this.http.post(this.url,data);
  }
  
}