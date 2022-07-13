import { Location } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { WebsocketService } from 'src/app/socket/websocket.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styles: [
  ]
})
export class DashboardComponent implements OnInit {
  
  constructor(private wsService:WebsocketService) { }

  ngOnInit(): void {
  }
  escucharSocks(){
    this.wsService.emit('crear-documento-interno','',(data:any)=>{
      console.log(data);
      
    });
  }
}
