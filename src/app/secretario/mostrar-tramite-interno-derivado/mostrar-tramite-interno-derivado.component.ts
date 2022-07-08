import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Area, AreaResult } from 'src/app/interface/Area.interface';
import {
  Destino,
  ResultDestinoInterno,
} from 'src/app/interface/Destino.interno.interface';
import {
  Respuesta,
  ResultRespuestaTramite,
} from 'src/app/interface/respuesta-tramite.interface';
import { AreaService } from 'src/app/services/area.service';
import { DestinoInternoService } from 'src/app/services/destino-interno.service';
import { DocumentoInternoService } from 'src/app/services/documento-interno.service';
import Swal from 'sweetalert2';
import { RespuestaTramiteService } from '../../services/respuesta-tramite.service';
import { DocumentoInternoResult, DocumentoInterno } from 'src/app/interface/documento-interno.interface';
import { RespuestaForm } from 'src/app/interface/respuesta-form.interface';
import { DetalledestinointernoService } from 'src/app/services/detalledestinointerno.service';

@Component({
  selector: 'app-mostrar-tramite-interno-derivado',
  templateUrl: './mostrar-tramite-interno-derivado.component.html',
  styleUrls: ['./mostrar-tramite-interno-derivado.component.css'],
})
export class MostrarTramiteInternoDerivadoComponent implements OnInit {
  listDestinoInter?: Destino[];
  atendido: string | number = 0;
  listRespuesta?: Array<Respuesta>;
  listArea?: Array<Area>;
  idCodigo:string='';
  listDocumento?: Array<DocumentoInterno>;
  respuestaForm: RespuestaForm = {
    area: '',
    iddoc:'',
    documentoOne: '',
    documentoTwo: '',
    envio: '',
    observacionOne: '',
    observacionTwo: '',
    observacionThree: ''
  }
  constructor(
    private destiInternoService: DestinoInternoService,
    private router: Router,
    private respuestaTrami: RespuestaTramiteService,
    private areaService: AreaService,
    private documentoService: DocumentoInternoService,
    private detalleInternoService:DetalledestinointernoService
  ) { }

  ngOnInit(): void {
    this.mostrarDestinosInternos();
    this.respuestaTramite();
    this.mostrarArea();
    this.mostrarDocumentos();
  }

  enviarRespuesta() {
    const formData = new FormData();
    console.log(this.respuestaForm);
    if (!document.getElementById('seleOne')?.classList.contains("invi")) {
      console.log('1');
      formData.append('envio', this.respuestaForm.envio);
      formData.append('area',this.respuestaForm.area);
      
      if (this.respuestaForm.documentoOne !== '') {
        formData.append('codigoDoc',this.respuestaForm.documentoOne);
      }
      formData.append('observacion',this.respuestaForm.observacionOne);
      
    }if (!document.getElementById('seleTwo')?.classList.contains("invi")) {
      formData.append('envio', this.respuestaForm.envio);
      if (this.respuestaForm.documentoTwo !== '') {
        formData.append('codigoDoc',this.respuestaForm.documentoTwo);
      }
      formData.append('observacion',this.respuestaForm.observacionTwo);
    }if (!document.getElementById('seleThree')?.classList.contains("invi")) {
      formData.append('observacion',this.respuestaForm.observacionThree);
    }
    formData.append('idDoc',this.idCodigo);
    this.detalleInternoService.postDetalleDestinoInterno(formData).subscribe(
      (data)=>{
        console.log(data);
        
      },
      (error)=>{
        console.log(error);
        
      }
    )
  }

  mostrarDestinosInternos() {
    this.destiInternoService.getDestinosInternos(this.atendido).subscribe(
      (data: ResultDestinoInterno) => {
        this.listDestinoInter = data.destinos;
        console.log(this.listDestinoInter);
      },
      (error) => {
        console.log(error);
      }
    );
  }
  recpcionar(id: any) {
    Swal.fire({
      title: 'Estas seguro?',
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Yes, Recepcionar!',
    }).then((result) => {
      if (result.isConfirmed) {
        this.destiInternoService.putRecepcion(id).subscribe(
          (data) => {
            console.log(data);
            Swal.fire('Recepcionado!', data.msg, 'success');
            this.mostrarDestinosInternos();
          },
          (error) => {
            console.log(error);
          }
        );
      }
    });
  }
  detallado(codigo: any, codigoDoc: any) {
    console.log(codigo, codigoDoc);
    this.router.navigate([
      `/secretaria/tramite-interno-detallado/${codigo}/${codigoDoc}`,
    ]);
  }
  respuestaTramite() {
    this.respuestaTrami.getRespuestas().subscribe(
      (data: ResultRespuestaTramite) => {
        console.log(data);
        this.listRespuesta = data.respuesta;
      },
      (error) => {
        console.log(error);
      }
    );
  }
  agregarId(id:any){
     this.idCodigo= `${id}`;
     console.log(this.idCodigo);
     
  }
  verDoc(event: any) {
    console.log(event.target.value);

    if (event.target.value !== '' && event.target.value === '3') {
      document.getElementById('seleOne')?.classList.remove('invi');
      document.getElementById('seleTwo')?.classList.add('invi');
      document.getElementById('seleThree')?.classList.add('invi');
      this.respuestaForm = {
        area: '',
        iddoc:this.idCodigo,
        documentoOne: '',
        documentoTwo: '',
        envio: event.target.value,
        observacionOne: '',
        observacionTwo: '',
        observacionThree: ''
      }
    }
    if (event.target.value !== '' && event.target.value === '4') {
      document.getElementById('seleOne')?.classList.add('invi');
      document.getElementById('seleTwo')?.classList.remove('invi');
      document.getElementById('seleThree')?.classList.add('invi');
      this.respuestaForm = {
        area: '',
        iddoc:this.idCodigo,
        documentoOne: '',
        documentoTwo: '',
        envio: event.target.value,
        observacionOne: '',
        observacionTwo: '',
        observacionThree: ''
      }
    }
    if (event.target.value !== '' && event.target.value === '5') {
      document.getElementById('seleOne')?.classList.add('invi');
      document.getElementById('seleTwo')?.classList.add('invi');
      document.getElementById('seleThree')?.classList.remove('invi');
      this.respuestaForm = {
        area: '',
        iddoc:this.idCodigo,
        documentoOne: '',
        documentoTwo: '',
        envio: event.target.value,
        observacionOne: '',
        observacionTwo: '',
        observacionThree: ''
      }
    }
    if (event.target.value === '') {
      document.getElementById('seleOne')?.classList.add('invi');
      document.getElementById('seleTwo')?.classList.add('invi');
      document.getElementById('seleThree')?.classList.add('invi');
      this.respuestaForm = {
        area: '',
        iddoc:this.idCodigo,
        documentoOne: '',
        documentoTwo: '',
        envio: '',
        observacionOne: '',
        observacionTwo: '',
        observacionThree: ''
      }
    }
  }
  mostrarArea() {
    this.areaService.getAreas(1).subscribe(
      (data: AreaResult) => {
        console.log(data);
        this.listArea = data.area
      },
      (error) => {
        console.log(error);

      }
    )
  }
  mostrarDocumentos() {
    this.documentoService.getDocumentoDerivadoInter().subscribe(
      (data: DocumentoInternoResult) => {
        console.log(data);
        this.listDocumento = data.documentoInter;
        for (let i = 0; i < this.listDocumento.length; i++) {
          const cod = this.listDocumento[i].codigoDocumento.split('-');
          const codigo = cod[1] + '-' + cod[2];
          this.listDocumento[i].codigo = codigo;
        }

      },
      (error) => {
        console.log(error);

      }
    )
  }
  cancelar(){
    this.respuestaForm = {
      area: '',
      iddoc:'',
      documentoOne: '',
      documentoTwo: '',
      envio: '',
      observacionOne: '',
      observacionTwo: '',
      observacionThree: ''
    }
  }
}
