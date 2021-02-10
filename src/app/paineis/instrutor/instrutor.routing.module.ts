import { RouterModule } from "@angular/router";
import { NgModule } from "@angular/core";
import { Routes } from "@angular/router";

import {InstrutorComponent} from "./instrutor.component";
import {PrincipalComponent} from "./principal/principal.component";
import {ClienteComponent} from './cliente/cliente.component';
import {EquipamentoComponent} from './equipamento/equipamento.component';
import { ClienteResolver } from '../recepcionista/principal/principal.resolver';

import{EquipamentoResolver}from '../../shared/resolver/equipamento.resolver';

const routes: Routes = [
    {
        path: '',
        component: InstrutorComponent,
        children:[
            {
                path: '',
                component: PrincipalComponent
            },
            {
                path: 'alunos',
                component: ClienteComponent,
                resolve:{
                    obterClienteDto: ClienteResolver
                }
            },
            {
                path: 'equipamento',
                component: EquipamentoComponent,
                resolve:{
                    ObterEquipamentoDTO: EquipamentoResolver
                }
            }
        ]
    }
]

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class InstrutorRoutingModule{}