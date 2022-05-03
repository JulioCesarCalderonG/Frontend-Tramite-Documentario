import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import {RouterModule} from '@angular/router'

import { SharedModule } from '../shared/shared.module';
import { DashboardComponent } from './dashboard/dashboard.component';
import { ProgressComponent } from './progress/progress.component';
import { SecretarioComponent } from './secretario.component';





@NgModule({
  declarations: [
    DashboardComponent,
    ProgressComponent,
    SecretarioComponent
  ],
  exports:[
    DashboardComponent,
    ProgressComponent,
    SecretarioComponent
  ],
  imports: [
    CommonModule,
    SharedModule,
    RouterModule
  ]
})
export class SecretarioModule { }
