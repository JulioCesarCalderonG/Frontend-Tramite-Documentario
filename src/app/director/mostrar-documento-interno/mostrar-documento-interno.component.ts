import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { DocumentoInterno, DocumentoInternoResult } from 'src/app/interface/documento-interno.interface';
import { FirmaInternoService } from 'src/app/services/firma-interno.service';
import { DocumentoInternoService } from '../../services/documento-interno.service';
import { ToastrService } from 'ngx-toastr';
import { urlBack } from 'src/app/api/apiTramite';
@Component({
  selector: 'app-mostrar-documento-interno',
  templateUrl: './mostrar-documento-interno.component.html',
  styleUrls: ['./mostrar-documento-interno.component.css']
})
export class MostrarDocumentoInternoComponent implements OnInit {
  listDocumento?:DocumentoInterno[];
  archivo?: File;
  codigo:string = '';
  url=urlBack;
  @ViewChild('fileDocument', { static: false }) fileDocument?: ElementRef;
  constructor(private toastr: ToastrService, private documentoService:DocumentoInternoService, private firmaService:FirmaInternoService) { }

  ngOnInit(): void {
    this.mostrarDocumentos();
  }
  mostrarDocumentos(){
    this.documentoService.getDocumentosInternos().subscribe(
      (data:DocumentoInternoResult)=>{
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
  firmarDocumento(){
    const dato = new FormData();
    if (this.archivo !== undefined) {
      dato.append('archivo', this.archivo);
      dato.append('codigo',this.codigo);
      this.firmaService.postFirma(dato).subscribe(
        (data)=>{
          console.log(data);
          this.toastr.success('Pdf Subido', data.msg)
          this.mostrarDocumentos();
          
        },
        (error)=>{
          console.log(error);
          
        }
      )
    }else{
      this.toastr.warning('No se selecciono ningun documento como firma', 'No seleccionado')
    }
     
  }
  funCodigo(cod:number){
    this.codigo = `${cod}`;
  }
  capturarFileLogo(event:any){
    this.archivo = this.fileDocument!.nativeElement.files[0];
    const imageBlob = this.fileDocument!.nativeElement.files[0];
  }
  cancelar(){
    
  }
}
