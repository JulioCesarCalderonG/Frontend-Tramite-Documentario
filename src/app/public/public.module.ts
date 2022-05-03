import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RouterModule } from '@angular/router';

import { HomeComponent } from './home/home.component';
import { TramiteExternoComponent } from './tramite-externo/tramite-externo.component';
import { PublicComponent } from './public.component';




@NgModule({
  declarations: [
    HomeComponent,
    TramiteExternoComponent,
    PublicComponent
  ],
  exports:[
    HomeComponent,
    TramiteExternoComponent,
    PublicComponent
  ],
  imports: [
    CommonModule,
    RouterModule
  ]
})
export class PublicModule { }
