import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Destino, ResultDestinoInterno } from 'src/app/interface/Destino.interno.interface';
import { DestinoInternoService } from 'src/app/services/destino-interno.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-mostrar-tramite-interno-derivado',
  templateUrl: './mostrar-tramite-interno-derivado.component.html',
  styleUrls: ['./mostrar-tramite-interno-derivado.component.css']
})
export class MostrarTramiteInternoDerivadoComponent implements OnInit {
  listDestinoInter?:Destino[];
  atendido:string | number = 0;
  constructor(private destiInternoService:DestinoInternoService, private router:Router) { }

  ngOnInit(): void {
    this.mostrarDestinosInternos();
  }


  mostrarDestinosInternos(){
    this.destiInternoService.getDestinosInternos(this.atendido).subscribe(
      (data:ResultDestinoInterno)=>{
        this.listDestinoInter =data.destinos;
        console.log(this.listDestinoInter);
        
      },
      (error)=>{
        console.log(error);
        
      }
    )
  }
  recpcionar(id:any){
    Swal.fire({
      title: 'Estas seguro?',
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Yes, Recepcionar!'
    }).then((result) => {
      if (result.isConfirmed) {
        this.destiInternoService.putRecepcion(id).subscribe(
          (data)=>{
            console.log(data);
            Swal.fire(
              'Recepcionado!',
              data.msg,
              'success'
            );
            this.mostrarDestinosInternos();
          },
          (error)=>{
            console.log(error);
          }
        )
        
      }
    });
  }
  detallado(codigo:any, codigoDoc:any){
    console.log(codigo,codigoDoc);
    this.router.navigate([`/secretaria/tramite-interno-detallado/${codigo}/${codigoDoc}`]);
  }
  
}
