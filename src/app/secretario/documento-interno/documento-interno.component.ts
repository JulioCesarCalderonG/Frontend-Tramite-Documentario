import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Area, AreaResult } from 'src/app/interface/Area.interface';
import { DocumentInter } from 'src/app/interface/documentInter.interface';
import { AreaService } from 'src/app/services/area.service';
import { DocumentoInternoService } from 'src/app/services/documento-interno.service';
import { TipoDocumentoService } from 'src/app/services/tipo-documento.service';
import { TipoDocResult, Tipodocumento } from '../../interface/tipoDocumento.interface';
import { Select2OptionData } from 'ng-select2';
import { Options } from 'select2';
@Component({
  selector: 'app-documento-interno',
  templateUrl: './documento-interno.component.html',
  styleUrls: ['./documento-interno.component.css']
})
export class DocumentoInternoComponent implements OnInit {

  exampleData=[
    {
      id: 'multiple1',
      text: 'Multiple 1'
    },
    {
      id: 'multiple2',
      text: 'Multiple 2'
    },
    {
      id: 'multiple3',
      text: 'Multiple 3'
    },
    {
      id: 'multiple4',
      text: 'Multiple 4'
    }
  ];
  value:string[] = ['multiple2', 'multiple4'];

  options: Options = {
      width: '900',
      multiple: true,
      tags: true
    };
  listTipoDoc: Array<Tipodocumento> = [];
  listArea?: Array<Area>;
  listAreas?: Array<Area>;
  editAr: boolean = false;
  htmlContent = '';
  archivo?: Array<File>;
  documentForm:DocumentInter={
    area:'',
    asunto:'',
    descripcion:'',
    destinoOne:'',
    destinoTwo:'',
    referencia:'',
    tipoDoc:''
  }
  @ViewChild('fileDocument', { static: false }) fileDocument?: ElementRef;
  
  constructor(
    private areaService: AreaService,
    private tipoDocService: TipoDocumentoService,
    private documentService: DocumentoInternoService,
    
  ) {
  }

  ngOnInit(): void {
   this.mostrarDatos();
    this.mostrarTipoDoc();
    this.mostrarArea();
  }
mostrarDatos(){
  
}
  mostrarTipoDoc() {
    this.tipoDocService.getTipoDocumento(1).subscribe(
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
        console.log(data);
        this.listArea = data.area;
      },
      (error) => {
        console.log(error);
      }
    )
  }
  verDoc(event: any) {

    if (event.target.value !== "" && event.target.value.length > 1) {
      document.getElementById('seleTwo')?.classList.remove('invi');
      document.getElementById('seleOne')?.classList.add('invi');
    }
    if (event.target.value !== "" && event.target.value.length === 1) {
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
    console.log(this.documentForm);
    
    /* Array.from(this.archivo!).forEach((f:any) => {formData.append('archivo',f)});
    formData.append('tipoDocumento', this.documentForm.tipoDoc);
    formData.append('destino', this.documentForm.destinoOne);
    this.documentService.postDocumento(formData).subscribe(
      (data) => {
        console.log(data);

      },
      (error) => {
        console.log(error);

      }
    ) */
  }
}
