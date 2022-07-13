import { Component, OnInit } from '@angular/core';
import { WebsocketService } from '../socket/websocket.service';
@Component({
  selector: 'app-director',
  templateUrl: './director.component.html',
  styleUrls: ['./director.component.css']
})
export class DirectorComponent implements OnInit {

  constructor(private wsService:WebsocketService) { }

  ngOnInit(): void {
    this.cargar();
    this.actualizarSocks();
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
}
