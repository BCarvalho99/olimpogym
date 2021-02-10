import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ClienteComponent } from '../cliente/cliente.component';
import { DadosComponent } from '../cliente/dados/dados.component';
import { PrincipalComponent } from '../cliente/principal/principal.component';
import { MensalidadeComponent } from './mensalidade/mensalidade.component';
import { ResgateComponent } from './resgate/resgate.component';
import { TreinoComponent } from './treino/treino.component';
import { DadosResolver } from './dados/dados.resolver';
import { ContratoComponent } from './contrato/contrato.component';
import { BoletoComponent } from './mensalidade/boleto/boleto.component';
import { CartaoComponent } from './mensalidade/cartao/cartao.component';
import { ClienteTreinoResolver } from './treino/cliente-treino.resolver';
import { AulaServiceResolver } from './principal/aula.resolver';
const routes: Routes = [
  {
    path: '', 
    component: ClienteComponent,
    children:[
        {
            path: '',
            component: PrincipalComponent,
            resolve:{
              obterAulaDto: AulaServiceResolver
            }
        },
        {
            path: 'meusdados',
            component: DadosComponent,
            resolve:{
              obterClienteDto: DadosResolver
            }
        },
        {
            path: 'mensalidade',
            component: MensalidadeComponent
        },
        {
            path: 'resgate',
            component: ResgateComponent
        },
        { 
            path: 'treino',
            component: TreinoComponent,
            resolve:{
              obterTreinoCliente: ClienteTreinoResolver
            }
        },
        {
          path: 'meusdados/contrato',
          component: ContratoComponent
        },
        {
          path: 'mensalidade/boleto',
          component: BoletoComponent
        },
        {
          path: 'mensalidade/cartao',
          component: CartaoComponent
        }
    ]
  }
];
@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})

export class ClienteRoutingModule{
}