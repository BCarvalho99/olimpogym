import { RouterModule } from "@angular/router";
import { NgModule } from "@angular/core";
import { Routes } from "@angular/router";

import { GerenteComponent } from "./gerente.component";
import { PrincipalComponent } from "./principal/principal.component";
import { EquipamentoComponent } from './equipamento/equipamento.component';
import { FuncionarioComponent } from "./funcionario/funcionario.component";
import { RelatorioComponent } from "./relatorio/relatorio.component";
import { ClienteComponent } from './cliente/cliente.component';
import { ClienteResolver } from '../../shared/resolver/cliente.resolver';
import { FuncionarioResolver } from '../../shared/resolver/funcionario.resolver';
import { EquipamentoResolver } from '../../shared/resolver/equipamento.resolver';

const routes: Routes = [
    {
        path: '',
        component: GerenteComponent,
        children:[
            {
                path: '',
                component: PrincipalComponent,
                resolve: {
                    obterClienteDto: ClienteResolver
                }
            },
            {
                path: 'aluno',
                component: ClienteComponent,
                resolve:{
                    obterClienteDto: ClienteResolver
                }
            },
            {
                path: 'funcionario',
                component: FuncionarioComponent,
                resolve:{
                    obterFuncionarioDto: FuncionarioResolver
                }
            },
            {
                path: 'equipamento',
                component: EquipamentoComponent,
                resolve: {
                    obterEquipamentoDto: EquipamentoResolver
                }
            },
            {
                path: 'relatorio',
                component: RelatorioComponent
            },
        ]
    }
]

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class GerenteRoutingModule{}