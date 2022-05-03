import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { NopagefoundComponent } from './npagefound/nopagefound/nopagefound.component';
import { SecretarioModule } from './secretario/secretario.module';
import { AuthModule } from './auth/auth.module';
import { PublicModule } from './public/public.module';


@NgModule({
  declarations: [
    AppComponent,
    NopagefoundComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    SecretarioModule,
    PublicModule,
    AuthModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
