import { RouterModule } from "@angular/router";
import { NgModule } from "@angular/core";
import { Routes } from "@angular/router";

import {RecepcionistaComponent} from "../recepcionista/recepcionista.component";
import {PrincipalComponent} from "./principal/principal.component";
import {ClienteComponent} from './cliente/cliente.component';
import {AtividadeComponent} from './atividade/atividade.component';
import {PerguntaComponent} from './pergunta/pergunta.component';
import {ClienteResolver} from './principal/principal.resolver';
import { DuvidaResolver } from 'src/app/home/main/duvidas/duvida.resolver';
import { AtividadeResolver } from 'src/app/home/main/horarios/horario.resolver';

const routes: Routes = [
    {
        path: '',
        component: RecepcionistaComponent,
        children:[
            {
                path: '',
                component: PrincipalComponent,
                resolve:{
                    obterClienteDTO: ClienteResolver
                }
            },
            {
                path: 'alunos',
                component: ClienteComponent,
                resolve:{
                    obterClienteDto: ClienteResolver
                }
            },
            {
                path: 'atividades',
                component: AtividadeComponent,
                resolve:{
                    obterAtividadeDTO: AtividadeResolver
                }
            },
            {
                path: 'perguntas',
                component: PerguntaComponent,
                resolve:{
                    obterDuvidaDTO: DuvidaResolver
                }
            }

        ]
    }
]

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class RecepcionistaRoutingModule{}