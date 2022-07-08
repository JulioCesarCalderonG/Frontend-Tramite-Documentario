import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { urlBack } from 'src/app/api/apiTramite';
import { Anexo, ResultAnexoPDF } from 'src/app/interface/AnexoPdf.interface';
import { Detalle, DetalleInternoResult } from 'src/app/interface/DetalleDestino.interface';
import {
  ResultSeguimientoInter,
  Seguimiento,
} from 'src/app/interface/seguimiento.interface';
import {
  ResultTramiteInternoIndi,
  Tramiteinter,
} from 'src/app/interface/Tramite.interno.interface';
import { AnexointernopdfService } from 'src/app/services/anexointernopdf.service';
import { DetalledestinointernoService } from 'src/app/services/detalledestinointerno.service';
import { SeguimientoInternoService } from 'src/app/services/seguimiento-interno.ts.service';
import { TramiteInternoService } from 'src/app/services/tramite-interno.service';
import { loadData, closeAlert } from '../../function/loadData';

@Component({
  selector: 'app-tramite-interno-detallado',
  templateUrl: './tramite-interno-detallado.component.html',
  styleUrls: ['./tramite-interno-detallado.component.css'],
})
export class TramiteInternoDetalladoComponent implements OnInit {
  codigo?: any;
  codigoDoc?: any;
  cargar: boolean = true;
  listSeguimiento?: Array<Seguimiento>;
  listAnexoPdf?:Array<Anexo>;
  listDetalle?:Array<Detalle>
  listTramite: Tramiteinter = {
    codigo: '',
    asunto: '',
    referencia: '',
    fecha: '',
    ano: '',
    idArea: 0,
    codigoDocumento: '',
    observacion: '',
    hora: '',
  };
  numeroTramite: string = '';
  url=urlBack;
  constructor(
    private _route: ActivatedRoute,
    private tramiteInterService: TramiteInternoService,
    private seguiInterService: SeguimientoInternoService,
    private anexoInternoPdf:AnexointernopdfService,
    private detalleService:DetalledestinointernoService
  ) {}

  ngOnInit(): void {
    this.codigo = this._route.snapshot.paramMap.get('codigo');
    this.codigoDoc = this._route.snapshot.paramMap.get('codigoDoc');
    console.log(this.codigo, this.codigoDoc);

    this.mostrarDoc();
    this.mostrarSeg();
    this.mostrarAnexo();
    this.mostrarDetalladoDestino();
  }
  mostrarDoc() {
    if (this.cargar) {
      loadData('Cargando Datos', 'Espere mientras los datos se cargan......!');
    }

    this.tramiteInterService.getTramiteinterno(this.codigo).subscribe(
      (data: ResultTramiteInternoIndi) => {
        this.listTramite = data.tramiteinter;
        this.cargar = false;
        if (!this.cargar) {
          closeAlert();
        }
      },
      (error) => {
        console.log(error);
      }
    );
  }
  mostrarSeg() {
    this.seguiInterService.getSeguimiento(this.codigo).subscribe(
      (data: ResultSeguimientoInter) => {
        this.listSeguimiento = data.seguimiento;
      },
      (error) => {
        console.log(error);
      }
    );
  }
  verDetallado(codigo: string) {
    this.numeroTramite = codigo;
  }
  mostrarAnexo() {
    this.anexoInternoPdf.getAnexoInterno(this.codigoDoc).subscribe(
      (data:ResultAnexoPDF)=>{
        //console.log(data);
        this.listAnexoPdf=data.anexo;
        
      },
      (error)=>{
        console.log(error);
        
      }
    )
  }
  mostrarDetalladoDestino(){
    this.detalleService.getDetalleDestino(this.codigo).subscribe(
      (data:DetalleInternoResult)=>{
        this.listDetalle=data.detalle
        
      },
      (error)=>{
        console.log(error);
        
      }
    )
  }
}
