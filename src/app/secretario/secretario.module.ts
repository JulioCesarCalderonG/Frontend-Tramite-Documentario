
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import {RouterModule} from '@angular/router'

import { SharedModule } from '../shared/shared.module';
import { DashboardComponent } from './dashboard/dashboard.component';
import { ProgressComponent } from './progress/progress.component';
import { SecretarioComponent } from './secretario.component';
import { DocumentoInternoComponent } from './documento-interno/documento-interno.component';
import { AngularEditorModule } from '@kolkov/angular-editor';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { IgetEditorModule } from '@iget/editor';
import { NgxEditorModule } from 'ngx-editor';
import { NgMultiSelectDropDownModule } from 'ng-multiselect-dropdown';
import {MatSelectModule} from '@angular/material/select';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { BrowserModule } from '@angular/platform-browser';
import {MatNativeDateModule} from '@angular/material/core';
import { MaterialModule } from '../material/material.module';
import { MostrarDocumentoInternoComponent } from './mostrar-documento-interno/mostrar-documento-interno.component';
import { MostrarTramiteInternoComponent } from './mostrar-tramite-interno/mostrar-tramite-interno.component';
import { MostrarTramiteInternoDerivadoComponent } from './mostrar-tramite-interno-derivado/mostrar-tramite-interno-derivado.component';
import { TramiteInternoDetalladoComponent } from './tramite-interno-detallado/tramite-interno-detallado.component';
import { ToastrModule } from 'ngx-toastr';
@NgModule({
  declarations: [
    DashboardComponent,
    ProgressComponent,
    SecretarioComponent,
    DocumentoInternoComponent,
    MostrarDocumentoInternoComponent,
    MostrarTramiteInternoComponent,
    MostrarTramiteInternoDerivadoComponent,
    TramiteInternoDetalladoComponent
  ],
  exports:[
    DashboardComponent,
    ProgressComponent,
    DocumentoInternoComponent,
    SecretarioComponent
  ],
  imports: [
    CommonModule,
    BrowserModule,
    BrowserAnimationsModule,
    MatNativeDateModule,
    SharedModule,
    RouterModule,
    ReactiveFormsModule,
    FormsModule,
    NgxEditorModule,
    AngularEditorModule,
    NgMultiSelectDropDownModule.forRoot(),
    MaterialModule,
    MatSelectModule,
    ToastrModule.forRoot(),
  ],
  providers:[

  ],
  bootstrap: [],
})
export class SecretarioModule { }
