import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { Area, AreaResult } from 'src/app/interface/Area.interface';
import { DocumentInter } from 'src/app/interface/documentInter.interface';
import { AreaService } from 'src/app/services/area.service';
import { DocumentoInternoService } from 'src/app/services/documento-interno.service';
import { TipoDocumentoService } from 'src/app/services/tipo-documento.service';
import { TipoDocResult, Tipodocumento, TipoDocResultInd } from '../../interface/tipoDocumento.interface';
import { IDropdownSettings } from 'ng-multiselect-dropdown';
import { SelectAreas } from '../../interface/areaSelect.interface';
import { FormControl } from '@angular/forms';
import { EditorConfig } from '../../interface/AngularEditor.interface';
@Component({
  selector: 'app-documento-interno',
  templateUrl: './documento-interno.component.html',
  styleUrls: ['./documento-interno.component.css'],
})
export class DocumentoInternoComponent implements OnInit {

  listTipoDoc: Array<Tipodocumento> = [];
  editorConfig = EditorConfig;
  listArea?: Array<Area>;
  editAr: boolean = false;
  htmlContent = '';
  archivo?: Array<File>;
  documentForm:DocumentInter={
    area:'',
    asunto:'',
    descripcion:'',
    destinoOne:'',
    destinoTwo:[],
    referencia:'',
    tipoDoc:''
  }
  tipoDoc?:any;
  @ViewChild('fileDocument', { static: false }) fileDocument?: ElementRef;
  
  constructor(
    private areaService: AreaService,
    private tipoDocService: TipoDocumentoService,
    private documentService: DocumentoInternoService,
    
  ) {
  }

  ngOnInit():void{
    this.mostrarArea();
    this.mostrarTipoDoc();
  }
  mostrarTipoDoc() {
    this.tipoDocService.getTipoDocumentos(1).subscribe(
      (data: TipoDocResult) => {
        console.log(data);
        this.listTipoDoc = data.tipodocumento;
      },
      (error) => {
        console.log(error);

      }
    )
  }
  
  mostrarArea() {
    this.areaService.getAreas(1).subscribe(
      (data: AreaResult) => {
        this.listArea = data.area;
      },
      (error) => {
        console.log(error);
      }
    )
  }
  verDoc(event: any) {

    
    if (event.target.value !== "" && event.target.value.length > 1) {
      this.tipoDocService.getTipoDocumeto(event.target.value).subscribe(
        (data:TipoDocResultInd)=>{
          this.tipoDoc = data.tipodocumento.id;
          console.log(this.tipoDoc);
          
        },
        (error)=>{
          console.log(error);
          
        }
      )
      document.getElementById('seleTwo')?.classList.remove('invi');
      document.getElementById('seleOne')?.classList.add('invi');
    }
    if (event.target.value !== "" && event.target.value.length === 1) {
      this.tipoDocService.getTipoDocumeto(event.target.value).subscribe(
        (data:TipoDocResultInd)=>{
          this.tipoDoc = data.tipodocumento.id;
          console.log(this.tipoDoc);
          
        },
        (error)=>{
          console.log(error);
          
        }
      )
      document.getElementById('seleTwo')?.classList.add('invi')
      document.getElementById('seleOne')?.classList.remove('invi');
    }
    if (event.target.value === "") {
      document.getElementById('seleTwo')?.classList.add('invi')
      document.getElementById('seleOne')?.classList.add('invi');
    }

  }
  capturarFileLogo(event: any) {
    this.archivo = event.target.files;
    const imageBlob = this.fileDocument!.nativeElement.files[0];
    console.log(event.target.files);
    console.log(imageBlob);
    
  }
  crearDocumento() {
    
    const formData = new FormData();
    if (!document.getElementById('seleOne')?.classList.contains("invi")) {
      console.log('Select one');
      formData.append('destino', this.documentForm.destinoOne);
    }
    if (!document.getElementById('seleTwo')?.classList.contains("invi")) {
      Array.from(this.documentForm.destinoTwo).forEach((f:any) => {formData.append('destino',f)});
    }
    formData.append('tipoDocumento', this.tipoDoc);
    formData.append('asunto', this.documentForm.asunto);
    if (this.documentForm.referencia !== '') {
      formData.append('referencia',this.documentForm.referencia);
    }
    formData.append('descripcion', this.documentForm.descripcion);
    if (this.archivo !== undefined) {
      Array.from(this.archivo!).forEach((f:any) => {formData.append('archivo',f)});
    }  
    this.documentService.postDocumento(formData).subscribe(
      (data) => {
        console.log(data);
      },
      (error) => {
        console.log(error);

      }
    )
  }
}
