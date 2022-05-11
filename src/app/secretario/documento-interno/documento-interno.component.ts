import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { Area, AreaResult } from 'src/app/interface/Area.interface';
import { DocumentInter } from 'src/app/interface/documentInter.interface';
import { AreaService } from 'src/app/services/area.service';
import { DocumentoInternoService } from 'src/app/services/documento-interno.service';
import { TipoDocumentoService } from 'src/app/services/tipo-documento.service';
import { TipoDocResult, Tipodocumento } from '../../interface/tipoDocumento.interface';
import { IDropdownSettings } from 'ng-multiselect-dropdown';
import { SelectAreas } from '../../interface/areaSelect.interface';
import { FormControl } from '@angular/forms';
@Component({
  selector: 'app-documento-interno',
  templateUrl: './documento-interno.component.html',
  styleUrls: ['./documento-interno.component.css'],
})
export class DocumentoInternoComponent implements OnInit {

  dropdownList: Array<SelectAreas>=this.getData();
  toppings = new FormControl();
  selectAr?: Array<string>;
  toppingList: string[] = ['Extra cheese', 'Mushroom', 'Onion', 'Pepperoni', 'Sausage', 'Tomato'];
  dropdownSettings: IDropdownSettings={
    singleSelection: false,
    idField: 'item_id',
    textField: 'item_text',
    selectAllText: 'Select All',
    unSelectAllText: 'UnSelect All',
    itemsShowLimit: 3,
    allowSearchFilter: true
  };
  listTipoDoc: Array<Tipodocumento> = [];
  listArea?: Array<Area>;
  listAreas: Array<Area>=[];
  editAr: boolean = false;
  htmlContent = '';
  archivo?: Array<File>;
  documentForm:DocumentInter={
    area:'',
    asunto:'',
    descripcion:'',
    destinoOne:'',
    destinoTwo:'',
    referencia:'',
    tipoDoc:''
  }
  @ViewChild('fileDocument', { static: false }) fileDocument?: ElementRef;
  
  constructor(
    private areaService: AreaService,
    private tipoDocService: TipoDocumentoService,
    private documentService: DocumentoInternoService,
    
  ) {
  }

  ngOnInit():void{
    this.mostrarArea();
    this.mostrarTipoDoc();
    this.getData();
    setTimeout(() => {
      this.dropdownList = this.getData();
    }, 5000);
  }
  mostrarTipoDoc() {
    this.tipoDocService.getTipoDocumento(1).subscribe(
      (data: TipoDocResult) => {
        console.log(data);
        this.listTipoDoc = data.tipodocumento;
      },
      (error) => {
        console.log(error);

      }
    )
  }
  
  mostrarArea() {
    this.areaService.getAreas(1).subscribe(
      (data: AreaResult) => {
        this.listArea = data.area;
        //this.listAreas = data.area;
      },
      (error) => {
        console.log(error);
      }
    )
  }
  getData():Array<SelectAreas>{
    let listSelect: Array<SelectAreas> = [];
    this.areaService.getAreas(1).subscribe(
      (data: AreaResult) => {
        this.listAreas=data.area;
        for (let i = 0; i < this.listAreas!.length; i++) {
          listSelect.push({item_id:Number(this.listAreas[i].id),item_text:this.listAreas[i].nombre})
        }
      },
      (error) => {
        console.log(error);
      }
    )
    
    return listSelect;
    
    
  }
  verDoc(event: any) {

    if (event.target.value !== "" && event.target.value.length > 1) {
      document.getElementById('seleTwo')?.classList.remove('invi');
      document.getElementById('seleOne')?.classList.add('invi');
    }
    if (event.target.value !== "" && event.target.value.length === 1) {
      document.getElementById('seleTwo')?.classList.add('invi')
      document.getElementById('seleOne')?.classList.remove('invi');
    }
    if (event.target.value === "") {
      document.getElementById('seleTwo')?.classList.add('invi')
      document.getElementById('seleOne')?.classList.add('invi');
    }

  }
  capturarFileLogo(event: any) {
    this.archivo = event.target.files;
    const imageBlob = this.fileDocument!.nativeElement.files[0];
    console.log(event.target.files);
    console.log(imageBlob);
    
  }
  crearDocumento() {
    const formData = new FormData();
    console.log(this.documentForm);
    console.log(this.selectAr);
    
    /* Array.from(this.archivo!).forEach((f:any) => {formData.append('archivo',f)});
    formData.append('tipoDocumento', this.documentForm.tipoDoc);
    formData.append('destino', this.documentForm.destinoOne);
    this.documentService.postDocumento(formData).subscribe(
      (data) => {
        console.log(data);

      },
      (error) => {
        console.log(error);

      }
    ) */
  }
}
