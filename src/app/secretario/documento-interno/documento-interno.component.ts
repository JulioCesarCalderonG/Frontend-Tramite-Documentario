import { Component, OnInit } from '@angular/core';
import { AngularEditorConfig } from '@kolkov/angular-editor';
import { Editor } from 'ngx-editor';
import { Area, AreaResult } from 'src/app/interface/Area.interface';
import { AreaService } from 'src/app/services/area.service';
import { TipoDocumentoService } from 'src/app/services/tipo-documento.service';
import { TipoDocResult, Tipodocumento } from '../../interface/tipoDocumento.interface';
@Component({
  selector: 'app-documento-interno',
  templateUrl: './documento-interno.component.html',
  styleUrls: ['./documento-interno.component.css']
})
export class DocumentoInternoComponent implements OnInit {
  
  listTipoDoc:Array<Tipodocumento>=[];
  listArea?:Array<Area>;
  listAreas?:Array<Area>;
  editAr:boolean=false;
  editArs:boolean=false;
  htmlContent='';
  editor: Editor = new Editor;
  html?: '';
  editorConfig: AngularEditorConfig = {
    editable: true,
      spellcheck: true,
      height: '400px',
      minHeight: '0',
      maxHeight: 'auto',
      width: 'auto',
      minWidth: '0',
      translate: 'yes',
      enableToolbar: true,
      showToolbar: true,
      placeholder: 'Enter text here...',
      defaultParagraphSeparator: '',
      defaultFontName: '',
      defaultFontSize: '',
      fonts: [
        {class: 'arial', name: 'Arial'},
        {class: 'times-new-roman', name: 'Times New Roman'},
        {class: 'calibri', name: 'Calibri'},
        {class: 'comic-sans-ms', name: 'Comic Sans MS'}
      ],
      customClasses: [
      {
        name: 'quote',
        class: 'quote',
      },
      {
        name: 'redText',
        class: 'redText'
      },
      {
        name: 'titleText',
        class: 'titleText',
        tag: 'h1',
      },
    ],
};
  constructor(private areaService: AreaService, private tipoDocService: TipoDocumentoService) { }

  ngOnInit(): void {
    
    this.mostrarTipoDoc();
    this.mostrarArea();
  }

  mostrarTipoDoc(){
    this.tipoDocService.getTipoDocumento(1).subscribe(
      (data:TipoDocResult)=>{
        console.log(data);
        this.listTipoDoc = data.tipodocumento
        
      },
      (error)=>{
        console.log(error);
        
      }
    )
  }
  mostrarArea(){
    this.areaService.getAreas(1).subscribe(
      (data:AreaResult)=>{
        console.log(data);
        this.listArea = data.area;
        this.listAreas = data.area;
      },
      (error)=>{
        console.log(error);
        
      }
    )
  }
  verDoc(event:any){
    
    if (event.target.value !== "" && event.target.value.length > 1) {
      document.getElementById('seleTwo')?.classList.remove('invi');
      document.getElementById('seleOne')?.classList.add('invi');
      
    }
    if (event.target.value !== "" && event.target.value.length === 1) {
      document.getElementById('seleTwo')?.classList.add('invi')
      document.getElementById('seleOne')?.classList.remove('invi');
    }
    if (event.target.value === ""){
      document.getElementById('seleTwo')?.classList.add('invi')
      document.getElementById('seleOne')?.classList.add('invi');
    }
    
  }
}
