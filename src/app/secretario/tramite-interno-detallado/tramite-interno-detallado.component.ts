import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ResultSeguimientoInter, Seguimiento } from 'src/app/interface/seguimiento.interface';
import { ResultTramiteInternoIndi, Tramiteinter } from 'src/app/interface/Tramite.interno.interface';
import { SeguimientoInternoService } from 'src/app/services/seguimiento-interno.ts.service';
import { TramiteInternoService } from 'src/app/services/tramite-interno.service';

@Component({
  selector: 'app-tramite-interno-detallado',
  templateUrl: './tramite-interno-detallado.component.html',
  styleUrls: ['./tramite-interno-detallado.component.css']
})
export class TramiteInternoDetalladoComponent implements OnInit {
  codigo?:any;
  codigoDoc?:any;
  listSeguimiento?:Array<Seguimiento>;
  listTramite:Tramiteinter={
    codigo:'',
    asunto:'',
    referencia:'',
    fecha:'',
    ano:'',
    idArea:0,
    codigoDocumento:'',
    observacion:'',
    hora:''
  };
  constructor(private _route: ActivatedRoute, private tramiteInterService:TramiteInternoService, private seguiInterService:SeguimientoInternoService) { }

  ngOnInit(): void {
    this.codigo=this._route.snapshot.paramMap.get('codigo');
    this.codigoDoc=this._route.snapshot.paramMap.get('codigoDoc');
    this.mostrarDoc();
    this.mostrarSeg();
  }
  mostrarDoc(){
    this.tramiteInterService.getTramiteinterno(this.codigo).subscribe(
      (data:ResultTramiteInternoIndi)=>{
        //console.log(data);
        this.listTramite = data.tramiteinter;
        console.log(this.listTramite);
        
      },
      (error)=>{
        console.log(error);
        
      }
    )
  }
  mostrarSeg(){
    this.seguiInterService.getSeguimiento(this.codigo).subscribe(
      (data:ResultSeguimientoInter)=>{
        this.listSeguimiento = data.seguimiento;
        console.log(this.listSeguimiento);
        
      },
      (error)=>{
        console.log(error);
        
      }
    )
  }
}
