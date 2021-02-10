import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  {
    path: 'cliente', 
    loadChildren: () => import('src/app/paineis/cliente/cliente.module').then(m => m.ClienteModule)
  },
  {
    path: 'recepcionista',
    loadChildren: () => import('src/app/paineis/recepcionista/recepcionista.module').then(m => m.RecepcionistaModule)
  },
  {
    path: 'instrutor',
    loadChildren: () => import('src/app/paineis/instrutor/instrutor.module').then(m=>m.InstrutorModule)
  },
  {
    path: 'supervisor',
    loadChildren: () => import('src/app/paineis/surpervisor/supervisor.module').then(m=>m.SupervisorModule)
  },
  {
    path: 'gerente',
    loadChildren: () => import('src/app/paineis/gerente/gerente.module').then(m=>m.GerenteModule)
  }
];
@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})

export class PainelRoutingModule{
}