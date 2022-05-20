import { Component, OnInit } from '@angular/core';
import { ResultTramiteInterno, Tramiteinter } from 'src/app/interface/Tramite.interno.interface';
import { TramiteInternoService } from 'src/app/services/tramite-interno.service';

@Component({
  selector: 'app-mostrar-tramite-interno',
  templateUrl: './mostrar-tramite-interno.component.html',
  styleUrls: ['./mostrar-tramite-interno.component.css']
})
export class MostrarTramiteInternoComponent implements OnInit {
  listTramite:Array<Tramiteinter>=[];
  constructor(private tramiteInternoService:TramiteInternoService) { }

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
}