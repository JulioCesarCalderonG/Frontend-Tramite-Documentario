import { Component } from '@angular/core';
import { WebsocketService } from './socket/websocket.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'frontend-tramite-documentario';
  constructor(private wsService: WebsocketService){
    wsService.checkStatus();
  }
}
