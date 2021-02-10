import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FuncionarioComponent } from './funcionario.component';
import { PainelModalModule } from '../../../shared/components/painel-modal/painel-modal.module';
import { TableModule } from '../../../shared/components/table/table.module';
import { BoxedTableModule } from '../../../shared/components/boxed-table/boxed-table.module';
import { SearchModule } from 'src/app/shared/components/search/search.module';
import { TableButtonModule } from '../../../shared/diretivas/table-button/table.module';
import { AlertModule } from 'src/app/shared/components/alert/alert.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AddFuncionarioComponent } from './add-funcionario/add-funcionario.component';
import { ValidatorMessageModule } from '../../../shared/validator-message/validator-message.module';
import { EditFuncionarioComponent } from './edit-funcionario/edit-funcionario.component';
@NgModule({
    declarations: [
        FuncionarioComponent,
        AddFuncionarioComponent,
        EditFuncionarioComponent
    ],
    imports:[
        CommonModule,
        PainelModalModule, 
        TableModule, 
        BoxedTableModule,
        SearchModule,
        TableButtonModule,
        AlertModule,
        ReactiveFormsModule,
        FormsModule,
        ValidatorMessageModule
    ]
})
export class FuncionarioModule{}