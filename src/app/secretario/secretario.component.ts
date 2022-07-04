import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-secretario',
  templateUrl: './secretario.component.html',
  styles: [
  ]
})
export class SecretarioComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    this.cargar();
  }
  cargar(){
    if (sessionStorage.getItem('carga')==='0') {
      location.reload(); 
      sessionStorage.setItem('carga','1');
      
    }
  }
}
