import { RouterModule } from "@angular/router";
import { NgModule } from "@angular/core";
import { Routes } from "@angular/router";

import { HomeComponent } from './home.component';
import { CarrosselComponent } from './main/carrossel/carrossel.component';
import { LoginComponent } from '../home/main/login/login.component';
import { RegisterComponent } from './main/register/register.component';
import { RegisterResolve } from './main/register/register.resolver';
import { PlanoComponent } from './main/planos/plano.component';
import { DuvidaComponent } from './main/duvidas/duvida.component';
import { DuvidaResolver } from "./main/duvidas/duvida.resolver";
import { HorarioComponent } from './main/horarios/horario.component';
import { MainComponent } from '../home/main/main.component';
import {AtividadeResolver} from './main/horarios/horario.resolver'
import { PlanoResolver } from '../shared/resolver/plano.resolver';
import { AuthGuard } from '../core/auth/auth.guard';
const routes: Routes = [
    {
        path: '',
        component: HomeComponent,
        children:[
            {
                path: '',
                component: MainComponent
            },
            {
                path: 'login',
                component: LoginComponent
            },
            {
                path: '',
                component: CarrosselComponent
            },
            {
                path: 'login/register',
                component: RegisterComponent,
                resolve: {
                    ObterPlanoDto: RegisterResolve
                }
            },
            {
                path: 'planos',
                component: PlanoComponent,
                resolve:{
                    obterPlanoDto: PlanoResolver
                }
            },
            {
                path: 'duvidas',
                component: DuvidaComponent,
                resolve:{
                    obterDuvidas: DuvidaResolver
                }
            },
            {
                path:'horarios',
                component: HorarioComponent,
                resolve:{
                    obterAtividades: AtividadeResolver
                }
            },
            {
                path: 'painel',
                loadChildren: () => import('src/app/paineis/painel.module').then(m => m.PainelModule),
            }
        ]
    }
]

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class HomeRoutingModule{}