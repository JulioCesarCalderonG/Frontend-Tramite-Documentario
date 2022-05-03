import { Routes, RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { PublicComponent } from './public.component';
import { HomeComponent } from './home/home.component';
import { TramiteExternoComponent } from './tramite-externo/tramite-externo.component';


const routes: Routes = [

    {
        path: '',
        component: PublicComponent,
        children: [
            { path: '', component: HomeComponent },
            { path: 'tramite-externo', component: TramiteExternoComponent },
            
        ]
    },

];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class PublicRoutingModule { }
