import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { urlBack } from 'src/app/api/apiTramite';
import { ResultTramiteInterno, Tramiteinter } from 'src/app/interface/Tramite.interno.interface';
import { TramiteInternoService } from 'src/app/services/tramite-interno.service';

@Component({
  selector: 'app-mostrar-tramite-interno',
  templateUrl: './mostrar-tramite-interno.component.html',
  styleUrls: ['./mostrar-tramite-interno.component.css']
})
export class MostrarTramiteInternoComponent implements OnInit {
  listTramite:Array<Tramiteinter>=[];
  url=urlBack;
  idArea=sessionStorage.getItem('area');
  constructor(private tramiteInternoService:TramiteInternoService, private router:Router) { }

  ngOnInit(): void {
    this.mostrarTramite();
  }
  mostrarTramite(){
    this.tramiteInternoService.getTramiteInternos().subscribe(
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
