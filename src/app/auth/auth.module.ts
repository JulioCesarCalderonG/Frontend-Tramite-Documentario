import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {RouterModule} from '@angular/router'
import { LoginComponent } from './login/login.component';
import { AuthComponent } from './auth.component';

@NgModule({
  declarations: [
    LoginComponent,
    AuthComponent,
  ],
  exports:[
    LoginComponent,
    AuthComponent,
  ],
  imports: [
    CommonModule,
    RouterModule
  ]
})
export class AuthModule { }
