import { Location } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { WebsocketService } from 'src/app/socket/websocket.service';
import { AngularEditorConfig } from '@kolkov/angular-editor';
import { Editor } from 'ngx-editor';
import { ToolbarService, LinkService, ImageService, HtmlEditorService } from '@syncfusion/ej2-angular-richtexteditor';
@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: [
    './dashboard.component.css'
  ],
})
export class DashboardComponent implements OnInit {
  editor!: Editor;
  html= '';
  ckeditorContent='';
  constructor(private wsService:WebsocketService) { }

  ngOnInit(): void {
  }
  escucharSocks(){
    this.wsService.emit('crear-documento-interno','',(data:any)=>{
      console.log(data);
      
    });
  }
}
