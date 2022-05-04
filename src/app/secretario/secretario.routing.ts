import { Routes, RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { SecretarioComponent } from './secretario.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { ProgressComponent } from './progress/progress.component';
import { AuthGuardSecretaria } from '../guard/authSecretaria.guard';


const routes: Routes = [

    {
        path: 'secretaria',
        component: SecretarioComponent,
        children: [
            { path: '', component: DashboardComponent },
            { path: 'progress', component: ProgressComponent },
        ],
        canActivateChild:[
            AuthGuardSecretaria
        ]
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class SecretarioRoutingModule { }
