import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { NgxMaskModule, IConfig } from 'ngx-mask';
import { ReactiveFormsModule } from '@angular/forms';
import { NgbdModalConfigModule } from '../../shared/components/modal/modal-config.module';

import { ClienteComponent } from './cliente.component';
import { DadosComponent } from './dados/dados.component';
import { SideBarModule } from '../sidebar/sidebar.module';
import { PainelModule } from '../painel.module';
import { TemplateModule } from '../template/template.module';
import { HideIfloggedModule } from '../../shared/diretivas/hide-if-logged/hide-if-logged.module';
import { PrincipalComponent } from './principal/principal.component';
import { ClienteRoutingModule } from './cliente.routing.module';
import { ResgateComponent } from './resgate/resgate.component';
import { TreinoComponent } from './treino/treino.component';
import { ScrollModule } from '../../shared/components/scroll/scroll.module';
import { MensalidadeModule } from './mensalidade/mensalidade.module';
import { ContratoComponent } from './contrato/contrato.component';
import { TableModule } from '../../shared/components/table/table.module';
import { DisabledButtonModule } from '../../shared/diretivas/disabled-button/disabled-button.module';
import { AlertModule } from '../../shared/components/alert/alert.module';
import { SearchModule } from '../../shared/components/search/search.module';
const maskConfig: Partial<IConfig> = {
    validation: false
};
@NgModule({
    declarations:[
        ClienteComponent,
        DadosComponent,
        PrincipalComponent,
        ResgateComponent,
        TreinoComponent,
        ContratoComponent
    ],
    imports:[
        CommonModule,
        RouterModule,
        SideBarModule,
        PainelModule,
        TemplateModule,
        HideIfloggedModule,
        NgxMaskModule.forRoot(maskConfig),
        ClienteRoutingModule,
        NgbdModalConfigModule,
        ScrollModule,
        ReactiveFormsModule,
        MensalidadeModule,
        TableModule,
        DisabledButtonModule,
        AlertModule,
        SearchModule
    ],
    providers:[]
})
export class ClienteModule{}