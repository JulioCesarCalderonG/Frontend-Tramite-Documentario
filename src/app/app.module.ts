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
import { AuthGuardDirector } from './guard/authAdministrador.guard';
import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { InterceptorInterceptor } from './interceptor/interceptor.interceptor';


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
    PublicModule,
    AuthModule
  ],
  providers: [
    AuthGuardSecretaria,
    AuthGuardDirector,
    {
      provide: HTTP_INTERCEPTORS,
      useClass: InterceptorInterceptor,
      multi:true
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
