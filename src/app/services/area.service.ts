import { Injectable } from '@angular/core';
import { urlBack } from '../api/apiTramite';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AreaService {
  url = `${urlBack}/area`
  constructor(private http: HttpClient) { }


  getAreas(habilitado:number):Observable<any>{
    return this.http.get(this.url,{params:{habilitado}})
  }


}
