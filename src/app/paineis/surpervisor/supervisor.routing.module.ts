import { RouterModule } from "@angular/router";
import { NgModule } from "@angular/core";
import { Routes } from "@angular/router";

import {SupervisorComponent} from "./supervisor.component";
import {PrincipalComponent} from "./principal/principal.component";
import {EquipamentoComponent} from './equipamento/equipamento.component';
import {FuncionarioComponent} from "./funcionario/funcionario.component";


const routes: Routes = [
    {
        path: '',
        component: SupervisorComponent,
        children:[
            {
                path: '',
                component: PrincipalComponent
            },
            {
                path: 'funcionario',
                component: FuncionarioComponent
            },
            {
                path: 'equipamento',
                component: EquipamentoComponent
            }
        ]
    }
]

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class SupervisorRoutingModule{}