import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DirectorComponent } from './director.component';
import { RouterModule } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';
import { SharedModule } from '../shared/shared.module';
import { MostrarDocumentoInternoComponent } from './mostrar-documento-interno/mostrar-documento-interno.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ToastrModule } from 'ngx-toastr';
import { RichTextEditorModule } from '@syncfusion/ej2-angular-richtexteditor';
import { AngularEditorModule } from '@kolkov/angular-editor';
import { NgxEditorModule } from 'ngx-editor';
import { FroalaEditorModule, FroalaViewModule } from 'angular-froala-wysiwyg';
import { CKEditorModule } from 'ng2-ckeditor';
@NgModule({
  declarations: [
    DirectorComponent,
    DashboardComponent,
    MostrarDocumentoInternoComponent
  ],
  exports:[
    DirectorComponent,
    DashboardComponent,
    
  ],
  imports: [
    CommonModule,
    SharedModule,
    RouterModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    ToastrModule.forRoot(),
    FormsModule,
    RichTextEditorModule,
    AngularEditorModule,
    NgxEditorModule,
    FroalaEditorModule.forRoot(), 
    FroalaViewModule.forRoot(),
    CKEditorModule
  ],
  providers:[

  ]
})
export class DirectorModule { }
