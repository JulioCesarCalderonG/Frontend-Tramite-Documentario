import { Routes, RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { SecretarioComponent } from './secretario.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { ProgressComponent } from './progress/progress.component';
import { AuthGuardSecretaria } from '../guard/authSecretaria.guard';
import { DocumentoInternoComponent } from './documento-interno/documento-interno.component';
import { MostrarDocumentoInternoComponent } from './mostrar-documento-interno/mostrar-documento-interno.component';
import { MostrarTramiteInternoComponent } from './mostrar-tramite-interno/mostrar-tramite-interno.component';


const routes: Routes = [

    {
        path: 'secretaria',
        component: SecretarioComponent,
        children: [
            { path: '', component: DashboardComponent },
            { path: 'progress', component: ProgressComponent },
            { path: 'documento-interno', component: DocumentoInternoComponent },
            { path: 'mostrar-documento-interno', component: MostrarDocumentoInternoComponent },
            { path: 'mostrar-tramite-interno', component: MostrarTramiteInternoComponent }
        ],
        canActivateChild: [
            AuthGuardSecretaria
        ]
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class SecretarioRoutingModule { }
