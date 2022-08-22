import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { urlBack } from 'src/app/api/apiTramite';
import { ResultTramiteInterno, Tramiteinter } from 'src/app/interface/Tramite.interno.interface';
import { TramiteInternoService } from 'src/app/services/tramite-interno.service';

@Component({
  selector: 'app-mostrar-interno-global',
  templateUrl: './mostrar-interno-global.component.html',
  styleUrls: ['./mostrar-interno-global.component.css']
})
export class MostrarInternoGlobalComponent implements OnInit {

  listTramite:Array<Tramiteinter>=[];
  url=urlBack;
  idArea=sessionStorage.getItem('area');
  p: number = 1;
  filterPost='';
  constructor(private tramiteInternoService:TramiteInternoService, private router:Router) { }

  ngOnInit(): void {
    this.mostrarTramite();
  }
  mostrarTramite(){
    this.tramiteInternoService.getTramiteGlobalInterno().subscribe(
      (data:ResultTramiteInterno)=>{
        console.log(data);
        this.listTramite = data.tramiteinter
      },
      (error)=>{
        console.log(error);
      }
    )
  }
  enviarRuta(codigo:string,codigoDoc:string){
    this.router.navigate([`/secretaria/tramite-interno-detallado/${codigo}/${codigoDoc}`]);
  }
}
