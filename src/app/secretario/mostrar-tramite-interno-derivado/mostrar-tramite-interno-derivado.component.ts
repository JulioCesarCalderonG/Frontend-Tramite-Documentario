import { Component, OnInit } from '@angular/core';
import { Destino, ResultDestinoInterno } from 'src/app/interface/Destino.interno.interface';
import { DestinoInternoService } from 'src/app/services/destino-interno.service';

@Component({
  selector: 'app-mostrar-tramite-interno-derivado',
  templateUrl: './mostrar-tramite-interno-derivado.component.html',
  styleUrls: ['./mostrar-tramite-interno-derivado.component.css']
})
export class MostrarTramiteInternoDerivadoComponent implements OnInit {
  listDestinoInter?:Destino[];
  atendido:string | number = 0;
  constructor(private destiInternoService:DestinoInternoService) { }

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
    console.log(id);
  }
}
