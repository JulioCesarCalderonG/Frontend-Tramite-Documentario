import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-sidebar-secre',
  templateUrl: './sidebar-secre.component.html',
  styles: [
  ]
})
export class SidebarSecreComponent implements OnInit {

  usuario = `${sessionStorage.getItem('usuario')}`;
  constructor() { }

  ngOnInit(): void {
  }
  
}
