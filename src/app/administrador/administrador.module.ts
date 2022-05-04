import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AdministradorComponent } from './administrador.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { SharedModule } from '../shared/shared.module';
import { RouterModule } from '@angular/router';
import { DocumentointernoComponent } from './documentointerno/documentointerno.component';



@NgModule({
  declarations: [
    DashboardComponent,
    AdministradorComponent,
    DocumentointernoComponent,
  ],
  exports:[
    DashboardComponent,
    AdministradorComponent,
  ],
  imports: [
    CommonModule,
    SharedModule,
    RouterModule
  ]
})
export class AdministradorModule { }
