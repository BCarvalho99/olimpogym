import { EquipamentoModule } from './../gerente/equipamento/equipamento.module';
import { GerenteModule } from './../gerente/gerente.module';
import { SearchModule } from './../../shared/components/search/search.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {RouterModule} from '@angular/router';

import { InstrutorComponent } from './instrutor.component';
import {PainelModule} from '../painel.module';
import {InstrutorRoutingModule} from "./instrutor.routing.module";
import {SideBarModule} from "../sidebar/sidebar.module";
import {PrincipalComponent} from "./principal/principal.component";
import {TemplateModule} from '../template/template.module';
import {BoxPanelModule} from '../../shared/components/box-panel/box-panel.module';
import {ClienteComponent} from './cliente/cliente.component';
import {EquipamentoComponent} from './equipamento/equipamento.component';
import {BoxedTableModule} from '../../shared/components/boxed-table/boxed-table.module';
import{ClienteModule} from '../gerente/cliente/cliente.module';
import{PainelModalModule} from '../../shared/components/painel-modal/painel-modal.module';
import{AlertModule} from '../../shared/components/alert/alert.module';
import {TableButtonModule} from '../../shared/diretivas/table-button/table.module';
import{TableModule} from '../../shared/components/table/table.module';

@NgModule({
    declarations:[InstrutorComponent, PrincipalComponent,ClienteComponent, EquipamentoComponent ],
    imports:[
        CommonModule,
        PainelModule,
        RouterModule,
        InstrutorRoutingModule,
        SideBarModule,
        TemplateModule,
        BoxPanelModule,
        BoxedTableModule,
        TableButtonModule,
        TableModule,
        ClienteModule,
        PainelModalModule,
        AlertModule,
        ReactiveFormsModule,
        FormsModule,
        SearchModule,
        EquipamentoModule,
    ],
})
export class InstrutorModule{}
