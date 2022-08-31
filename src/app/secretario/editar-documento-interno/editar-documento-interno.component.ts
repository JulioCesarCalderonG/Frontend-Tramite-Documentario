import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-editar-documento-interno',
  templateUrl: './editar-documento-interno.component.html',
  styleUrls: ['./editar-documento-interno.component.css']
})
export class EditarDocumentoInternoComponent implements OnInit {
  
  constructor() { }

  ngOnInit(): void {
    this.dropFile();
  }
  dropFile(){
    const dropArea= document.querySelector(".drag-area");
    const dragText = dropArea?.querySelector('h2');
    const button = dropArea?.querySelector('button');
    const input = dropArea?.querySelector('input');
    let files:any;
    button?.addEventListener('click',(e)=>{
      input?.click();
    });
    input?.addEventListener("change",(e)=>{
      files=e;
      console.log(files.target.value);
      
      //dropArea?.classList.add('active');

    })


  }

}
