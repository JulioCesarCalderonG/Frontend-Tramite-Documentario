import { Component, OnInit } from '@angular/core';
import { DocumentoInterno, DocumentoInternoResult } from 'src/app/interface/documento-interno.interface';
import { DocumentoInternoService } from 'src/app/services/documento-interno.service';
import { TramiteInternoService } from 'src/app/services/tramite-interno.service';

@Component({
  selector: 'app-mostrar-documento-interno',
  templateUrl: './mostrar-documento-interno.component.html',
  styleUrls: ['./mostrar-documento-interno.component.css']
})
export class MostrarDocumentoInternoComponent implements OnInit {
  listDocumento?:DocumentoInterno[];
  derivarForm={
    codigoDoc:'',
    observacion:'',
    accion:''
  }
  derivacion:string='0';
  constructor(private documentoService:DocumentoInternoService, private tramiteService: TramiteInternoService) { }

  ngOnInit(): void {
    this.mostrarDocumentos();
  }
  mostrarDocumentos(){
    this.documentoService.getDocumentosInternos(this.derivacion).subscribe(
      (data:DocumentoInternoResult)=>{
        console.log(data);
        this.listDocumento = data.documentoInter;
        for (let i = 0; i < this.listDocumento.length; i++) {
          this.listDocumento[i].codigo = this.listDocumento[i].codigoDocumento?.split('-')[1];
          this.listDocumento[i].tipo =this.listDocumento[i].codigoDocumento?.split('-')[2];
        }
      },
      (error)=>{
        console.log(error);
      }
    )
  }
  asignarCod(codigo:any){
    this.derivarForm.codigoDoc =codigo;
  }
  derivar(){
    const data = new FormData();
    data.append('observacion', this.derivarForm.observacion);
    data.append('codigoDocumento', this.derivarForm.codigoDoc);
    data.append('accion',this.derivarForm.accion);
    this.tramiteService.postTramiteInterno(data).subscribe(
      (data)=>{
        console.log(data);
        this.mostrarDocumentos();
        this.cancelar();
      },
      (error)=>{
        console.log(error);
        
      }
    )
  } 
  cancelar(){
    this.derivarForm= {
      codigoDoc:'',
      observacion:'',
      accion:''
    }
  }
}
