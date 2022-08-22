import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { Area, AreaResult } from 'src/app/interface/Area.interface';
import { DocumentInter } from 'src/app/interface/documentInter.interface';
import { AreaService } from 'src/app/services/area.service';
import { DocumentoInternoService } from 'src/app/services/documento-interno.service';
import { TipoDocumentoService } from 'src/app/services/tipo-documento.service';
import { TipoDocResult, Tipodocumento, TipoDocResultInd } from '../../interface/tipoDocumento.interface';
import { EditorConfig } from '../../interface/AngularEditor.interface';
import { TipoEnvioService } from 'src/app/services/tipo-envio.service';
import { ResultTipoEnvio, Tipoenvio } from 'src/app/interface/TipoEnvio.interface';
import { ToastrService } from 'ngx-toastr';
import { Router } from '@angular/router';
import { WebsocketService } from 'src/app/socket/websocket.service';
import { EjemploDoc, ResultEjemploDocument } from 'src/app/interface/EjemploDocument';
import { EjemploDocumentoService } from 'src/app/services/ejemplo-documento.service';
import Swal from 'sweetalert2';
import { loadData } from 'src/app/function/loadData';
import { closeAlert } from '../../function/loadData';
@Component({
  selector: 'app-documento-interno',
  templateUrl: './documento-interno.component.html',
  styleUrls: ['./documento-interno.component.css'],
})
export class DocumentoInternoComponent implements OnInit {

  listTipoDoc: Array<Tipodocumento> = [];
  listEjemplo:Array<EjemploDoc>=[];
  editorConfig = EditorConfig;
  listArea?: Array<Area>;
  listEnvio?:Array<Tipoenvio>
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
    tipoDoc:'',
    tipoEnv:''
  }
  tipoDoc?:any;
  cargar=true;
  @ViewChild('fileDocument', { static: false }) fileDocument?: ElementRef;
  
  constructor(
    private areaService: AreaService,
    private tipoDocService: TipoDocumentoService,
    private documentService: DocumentoInternoService,
    private tipoEnvioService:TipoEnvioService,
    private toastr: ToastrService,
    private router: Router,
    private wsServices:WebsocketService,
    private ejemploDocumento:EjemploDocumentoService
  ) {
  }

  ngOnInit():void{
    this.mostrarArea();
    this.mostrarTipoDoc();
    this.mostrarTipoEnvio();
    this.mostrarEjemplos();
  }
  mostrarTipoDoc() {
    this.tipoDocService.getTipoDocumentos(1).subscribe(
      (data: TipoDocResult) => {
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
  mostrarTipoEnvio(){
    this.tipoEnvioService.getTipoEnvio().subscribe(
      (data:ResultTipoEnvio)=>{
        this.listEnvio=data.tipoenvio;
      },
      (error)=>{
        console.log(error);
        
      }
    )
  }
  verDoc(event: any) {

    
    if (event.target.value !== "" && event.target.value.length > 1) {
      this.tipoDocService.getTipoDocumeto(event.target.value).subscribe(
        (data:TipoDocResultInd)=>{
          this.tipoDoc = data.tipodocumento.id;
          
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
    
  }
  crearDocumento() {
    
    const formData = new FormData();
    console.log(this.documentForm);
     if (!document.getElementById('seleOne')?.classList.contains("invi")) {
      formData.append('destino', this.documentForm.destinoOne);
    }
    if (!document.getElementById('seleTwo')?.classList.contains("invi")) {
      Array.from(this.documentForm.destinoTwo).forEach((f:any) => {formData.append('destino',f)});
    }
    formData.append('tipoEnvio',this.documentForm.tipoEnv)
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
        this.wsServices.emit(`crear-documento-interno`,'',(data:any)=>{console.log(data);
        });
        this.toastr.success('Documento Creado', data.msg);
        this.router.navigate(['/secretaria/mostrar-documento-interno'])
      },
      (error) => {
        console.log(error);

      }
    ) 
  }
  mostrarEjemplos(){
    if (this.cargar) {
      loadData('Cargando Datos','Espere miestras se cargan los datos');
    }
    const id = sessionStorage.getItem('idUsuario');
    this.ejemploDocumento.getEjemploDocumento(id!).subscribe(
      (data:ResultEjemploDocument)=>{
        this.listEjemplo = data.ejemplo;
        this.cargar = false;
        if (!this.cargar) {
          closeAlert();
        }
      },(error)=>{
        console.log(error);
        
      }
    )
    
  }
  agregardescripcion(id:any,event:any){
      this.ejemploDocumento.getEjemploDocumentoUnico(id).subscribe(
        (data:ResultEjemploDocument)=>{
          this.documentForm.descripcion = data.ejemplo[0].contenido;
        },(error)=>{
          console.log(error);
          
        }
      );   
    
  }

  async crearDescripcion(){
    //console.log(this.documentForm.descripcion);
    if (this.documentForm.descripcion === '') {
      this.toastr.warning('Porfavor ingrese contenido a la descripcion','Sin contenido');
    }
    else{
      const { value: formValues } = await Swal.fire({
        title: 'Ingresa un Titulo',
        html:
          '<input id="swal-input1" class="form-control">',
        focusConfirm: false,
        showCancelButton: true,
        preConfirm: () => {
          const titulo = (document.getElementById('swal-input1') as HTMLInputElement).value;
          const idUsuario = sessionStorage.getItem('idUsuario');
          if (titulo !== '') {
            const formData = new FormData();
            formData.append('titulo',titulo);
            formData.append('contenido',this.documentForm.descripcion);
            formData.append('idUsuario',idUsuario!);
            
            this.ejemploDocumento.postEjemploDocumento(formData).subscribe(
              (data)=>{
                this.mostrarEjemplos();
                this.toastr.success('Ejemplo de documento creado con exito', 'Ejemplo Creado');

              },(error)=>{
                console.log(error);
                
              }
            )
          }else{
            this.toastr.error('Porfavor ingrese un titulo','Sin Titulo');
          }
          
        }
      })
    }
  }
}
