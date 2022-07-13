import { Component, OnInit } from '@angular/core';
import { WebsocketService } from '../socket/websocket.service';

@Component({
  selector: 'app-secretario',
  templateUrl: './secretario.component.html',
  styles: [
  ]
})
export class SecretarioComponent implements OnInit {

  constructor(private wsService:WebsocketService) { }

  ngOnInit(): void {
    this.cargar();
    this.actualizarSocks();
    this.versock();
  }
  cargar(){
    if (sessionStorage.getItem('carga')==='0') {
      location.reload(); 
      sessionStorage.setItem('carga','1');
      this.desconectarWs();
    }
  }
  actualizarSocks(){
    const area = sessionStorage.getItem('area');
    const usuario = sessionStorage.getItem('usuario');
    this.wsService.emit('configurar-usuario',{usuario,area},(data:any)=>{
      console.log(data);
    })
  }
  desconectarWs(){
    this.wsService.emit('disconnect');
  }
  versock(){
    const area = sessionStorage.getItem('area');
    this.wsService.listen(`crear-documento-interno-${area}`).subscribe(
      (data)=>{
        console.log(data);
        
      },
      (error)=>{
        console.log(error);
        
      }
    )
  }
}
