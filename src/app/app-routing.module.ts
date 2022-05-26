import { NgModule } from '@angular/core';
import  {RouterModule, Routes} from '@angular/router';

import { PublicRoutingModule } from './public/public.routing';
import { SecretarioRoutingModule } from './secretario/secretario.routing';
import { AuthRoutingModule } from './auth/auth.routing';

import { NopagefoundComponent } from './npagefound/nopagefound/nopagefound.component';
import { AdminRoutingModule } from './administrador/administrador.routing';
import { DirectorRoutingModule } from './director/director.routing';




const routes: Routes = [
  
  
  {path:'**',component:NopagefoundComponent},
]



@NgModule({
  declarations: [],
  imports: [
    RouterModule.forRoot(routes),
    PublicRoutingModule,
    AdminRoutingModule,
    SecretarioRoutingModule,
    DirectorRoutingModule,
    AuthRoutingModule
  ],
  exports:[RouterModule]
})
export class AppRoutingModule { }
