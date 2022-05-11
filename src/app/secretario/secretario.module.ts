
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
@NgModule({
  declarations: [
    DashboardComponent,
    ProgressComponent,
    SecretarioComponent,
    DocumentoInternoComponent
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
    MatSelectModule
  ],
  providers:[

  ],
  bootstrap: [],
})
export class SecretarioModule { }
