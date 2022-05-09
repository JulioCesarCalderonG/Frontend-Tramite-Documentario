import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import {RouterModule} from '@angular/router'

import { SharedModule } from '../shared/shared.module';
import { DashboardComponent } from './dashboard/dashboard.component';
import { ProgressComponent } from './progress/progress.component';
import { SecretarioComponent } from './secretario.component';
import { DocumentoInternoComponent } from './documento-interno/documento-interno.component';
import { AngularEditorModule } from '@kolkov/angular-editor';
import { FormsModule } from '@angular/forms';
import { IgetEditorModule } from '@iget/editor';
import { NgxEditorModule } from 'ngx-editor';

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
    SharedModule,
    RouterModule,
    FormsModule,
    NgxEditorModule,
    AngularEditorModule,
  ]
})
export class SecretarioModule { }
