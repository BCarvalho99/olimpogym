import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { AddClienteComponent } from './add-cliente/add-cliente.component';
import { EditClienteComponent } from './edit-cliente/edit-cliente.component';
import { RemoveClienteComponent } from './remove-cliente/remove-cliente.component';
import { ClienteComponent } from './cliente.component';
import { PainelModalModule } from '../../../shared/components/painel-modal/painel-modal.module';
import { TableModule } from '../../../shared/components/table/table.module';
import { BoxedTableModule } from '../../../shared/components/boxed-table/boxed-table.module';
import { SearchModule } from 'src/app/shared/components/search/search.module';
import { TableButtonModule } from '../../../shared/diretivas/table-button/table.module';
import { AlertModule } from 'src/app/shared/components/alert/alert.module';
import { ValidatorMessageModule } from '../../../shared/validator-message/validator-message.module';
@NgModule({
    declarations:[
        AddClienteComponent,
        EditClienteComponent,
        RemoveClienteComponent,
        ClienteComponent
    ],
    imports:[
        CommonModule,
        FormsModule,
        ReactiveFormsModule,
        PainelModalModule,
        TableModule,
        BoxedTableModule,
        SearchModule,
        TableButtonModule,
        AlertModule,
        ValidatorMessageModule
    ],
    exports:[
        AddClienteComponent,
        ClienteComponent
    ]
})
export class ClienteModule{}