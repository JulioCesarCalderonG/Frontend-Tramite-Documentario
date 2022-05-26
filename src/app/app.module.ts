import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { NopagefoundComponent } from './npagefound/nopagefound/nopagefound.component';
import { SecretarioModule } from './secretario/secretario.module';
import { AuthModule } from './auth/auth.module';
import { PublicModule } from './public/public.module';
import { AdministradorModule } from './administrador/administrador.module';
import { AuthGuardSecretaria } from './guard/authSecretaria.guard';
import { AuthGuardDirector } from './guard/authDirector.guard';
import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { InterceptorInterceptor } from './interceptor/interceptor.interceptor';
import { IgetEditorModule } from '@iget/editor';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { DirectorModule } from './director/director.module';
import { AuthGuardAdministrador } from './guard/authAdministrador.guard';


@NgModule({
  declarations: [
    AppComponent,
    NopagefoundComponent,
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AdministradorModule,
    SecretarioModule,
    DirectorModule,
    PublicModule,
    AuthModule,
    IgetEditorModule,
    BrowserAnimationsModule,
  ],
  providers: [
    AuthGuardSecretaria,
    AuthGuardDirector,
    AuthGuardAdministrador,
    {
      provide: HTTP_INTERCEPTORS,
      useClass: InterceptorInterceptor,
      multi:true
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
