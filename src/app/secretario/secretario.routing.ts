import { Routes, RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { SecretarioComponent } from './secretario.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { ProgressComponent } from './progress/progress.component';


const routes: Routes = [

    {
        path: 'secretaria',
        component: SecretarioComponent,
        children: [
            { path: '', component: DashboardComponent },
            { path: 'progress', component: ProgressComponent },
        ]
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class SecretarioRoutingModule { }
