import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {RouterModule} from '@angular/router';

import { GerenteComponent } from './gerente.component';
import { PainelModule } from '../painel.module';
import { GerenteRoutingModule } from "./gerente.routing.module";
import { SideBarModule } from "../sidebar/sidebar.module";
import { PrincipalComponent } from "./principal/principal.component";
import { TemplateModule } from '../template/template.module';
import { BoxPanelModule } from '../../shared/components/box-panel/box-panel.module';
import { BoxedTableModule } from '../../shared/components/boxed-table/boxed-table.module';
import { RelatorioComponent } from './relatorio/relatorio.component';
import { TableModule } from '../../shared/components/table/table.module';
import { NgbdModalConfigModule } from '../../shared/components/modal/modal-config.module';
import { ClienteModule } from './cliente/cliente.module';
import { FuncionarioModule } from './funcionario/funcionario.module';
import { EquipamentoModule } from './equipamento/equipamento.module';
import { ReactiveFormsModule } from '@angular/forms';
@NgModule({
    declarations:[
        GerenteComponent, 
        PrincipalComponent, 
        RelatorioComponent
    ],
    imports:[
        CommonModule, 
        PainelModule, 
        RouterModule, 
        GerenteRoutingModule, 
        SideBarModule,
        TemplateModule,
        BoxPanelModule,
        BoxedTableModule,
        TableModule,
        NgbdModalConfigModule,
        ClienteModule,
        FuncionarioModule,
        EquipamentoModule,
        ReactiveFormsModule
    ],
})
export class GerenteModule{}