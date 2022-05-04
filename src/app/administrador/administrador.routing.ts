import { Routes, RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { AdministradorComponent } from './administrador.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { AuthGuardDirector } from '../guard/authAdministrador.guard';


const routes: Routes = [

    {
        path:'admin',
        component:AdministradorComponent,
        children:[
            {path:'', component:DashboardComponent}
        ],
        canActivateChild:[
            AuthGuardDirector
        ]
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class AdminRoutingModule {}
