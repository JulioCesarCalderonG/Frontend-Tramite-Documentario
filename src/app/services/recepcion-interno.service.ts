import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { urlBack } from '../api/apiTramite';

@Injectable({
  providedIn: 'root'
})
export class RecepcionInternoService {
  url = `${urlBack}/destinointerno`
  constructor(private http: HttpClient) { }
}
