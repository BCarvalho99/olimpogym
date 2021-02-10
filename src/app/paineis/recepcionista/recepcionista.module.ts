import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {RouterModule} from '@angular/router';
import{ReactiveFormsModule, FormsModule} from '@angular/forms';

import { RecepcionistaComponent } from './recepcionista.component';
import {PainelModule} from '../painel.module';
import {RecepcionistaRoutingModule} from "./recepcionista.routing.module";
import {SideBarModule} from "../sidebar/sidebar.module";
import {PrincipalComponent} from "./principal/principal.component";
import {TemplateModule} from '../template/template.module';
import {BoxPanelModule} from '../../shared/components/box-panel/box-panel.module';
import {ClienteComponent} from './cliente/cliente.component';
import {BoxedTableModule} from '../../shared/components/boxed-table/boxed-table.module';
import {AtividadeComponent} from './atividade/atividade.component';
import {PerguntaComponent} from './pergunta/pergunta.component';
import {TableButtonModule} from '../../shared/diretivas/table-button/table.module';
import{TableModule} from '../../shared/components/table/table.module';
import{ClienteModule} from '../gerente/cliente/cliente.module';
import{PainelModalModule} from '../../shared/components/painel-modal/painel-modal.module'
import{AlertModule} from '../../shared/components/alert/alert.module';
import {EditAtividadeComponent} from './atividade/edit-atividade/edit-atividade.component';
import {EditPerguntaComponent} from './pergunta/edit-pergunta/edit-pergunta.component'
import {SearchModule} from 'src/app/shared/components/search/search.module';

@NgModule({
    declarations:[RecepcionistaComponent, PrincipalComponent,ClienteComponent, AtividadeComponent, PerguntaComponent, EditAtividadeComponent, EditPerguntaComponent],
    imports:[
        CommonModule, 
        PainelModule, 
        RouterModule, 
        RecepcionistaRoutingModule, 
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
        SearchModule

        
    ],
})
export class RecepcionistaModule{}