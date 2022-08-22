import { Component, OnInit } from '@angular/core';
import { LoginService } from 'src/app/auth/login/login.service';
import { WebsocketService } from 'src/app/socket/websocket.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styles: [
  ]
})
export class HeaderComponent implements OnInit {

  constructor(private login:LoginService, private wsService:WebsocketService) { }

  ngOnInit(): void {
  }
  cerrarSesion(){
    this.login.loggoud();
  }
  desconectarWs(){
    this.wsService.emit('disconnect');
  }
}
