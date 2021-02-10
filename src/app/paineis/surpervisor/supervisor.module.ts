import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {RouterModule} from '@angular/router';

import { SupervisorComponent } from './supervisor.component';
import {PainelModule} from '../painel.module';
import {SupervisorRoutingModule} from "./supervisor.routing.module";
import {SideBarModule} from "../sidebar/sidebar.module";
import {PrincipalComponent} from "./principal/principal.component";
import {TemplateModule} from '../template/template.module';
import {BoxPanelModule} from '../../shared/components/box-panel/box-panel.module';
import {EquipamentoComponent} from './equipamento/equipamento.component';
import {BoxedTableModule} from '../../shared/components/boxed-table/boxed-table.module';
import {FuncionarioComponent} from './funcionario/funcionario.component';

import {TableButtonModule} from '../../shared/diretivas/table-button/table.module';
import{TableModule} from '../../shared/components/table/table.module';

@NgModule({
    declarations:[SupervisorComponent, PrincipalComponent, EquipamentoComponent, FuncionarioComponent ],
    imports:[
        CommonModule, 
        PainelModule, 
        RouterModule, 
        SupervisorRoutingModule, 
        SideBarModule,
        TemplateModule,
        BoxPanelModule,
        BoxedTableModule,
        TableButtonModule,
        TableModule
    ],
})
export class SupervisorModule{}