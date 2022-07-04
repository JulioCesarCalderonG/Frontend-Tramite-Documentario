import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { urlBack } from '../api/apiTramite';

@Injectable({
  providedIn: 'root'
})
export class FirmaInternoService {
  url = `${urlBack}/firmadocumentointerno`
  constructor(private http: HttpClient) { }


  postFirma(data:any):Observable<any>{
    return this.http.post(this.url,data);
  }

}
