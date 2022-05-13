import { Component, OnInit } from '@angular/core';
import { DocumentoInterno, DocumentoInternoResult } from 'src/app/interface/documento-interno.interface';
import { DocumentoInternoService } from 'src/app/services/documento-interno.service';

@Component({
  selector: 'app-mostrar-documento-interno',
  templateUrl: './mostrar-documento-interno.component.html',
  styleUrls: ['./mostrar-documento-interno.component.css']
})
export class MostrarDocumentoInternoComponent implements OnInit {
  listDocumento?:DocumentoInterno[];
  constructor(private documentoService:DocumentoInternoService) { }

  ngOnInit(): void {
    this.mostrarDocumentos();
  }
  mostrarDocumentos(){
    this.documentoService.getDocumentosInternos().subscribe(
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
}
