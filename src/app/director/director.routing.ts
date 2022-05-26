import { Routes, RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { DirectorComponent } from './director.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { AuthGuardDirector } from '../guard/authDirector.guard';
import { MostrarDocumentoInternoComponent } from './mostrar-documento-interno/mostrar-documento-interno.component';


const routes: Routes = [
    {
        path: 'director',
        component: DirectorComponent,
        children: [
            { path: '', component: DashboardComponent },
            { path: 'mostrar-documento-interno', component: MostrarDocumentoInternoComponent }
        ],
        canActivateChild: [
            AuthGuardDirector
        ]
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class DirectorRoutingModule { }
