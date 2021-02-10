import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule, FormsModule} from '@angular/forms';

import { EquipamentoComponent } from './equipamento.component';
import { PainelModalModule } from '../../../shared/components/painel-modal/painel-modal.module';
import { TableModule } from '../../../shared/components/table/table.module';
import { BoxedTableModule } from '../../../shared/components/boxed-table/boxed-table.module';
import { SearchModule } from 'src/app/shared/components/search/search.module';
import { TableButtonModule } from '../../../shared/diretivas/table-button/table.module';
import { AddEquipamentoComponent } from './add-equipamento/add-equipamento.component';
import { ValidatorMessageModule } from '../../../shared/validator-message/validator-message.module';
import { AlertModule } from '../../../shared/components/alert/alert.module';
import { EditEquipamentoComponent } from './edit-equipamento/edit-equipamento.component';
@NgModule({
    declarations:[
        EquipamentoComponent,
        AddEquipamentoComponent,
        EditEquipamentoComponent
    ],
    imports: [
        CommonModule,
        PainelModalModule,
        TableModule,
        BoxedTableModule,
        SearchModule,
        TableButtonModule,
        ReactiveFormsModule,
        FormsModule,
        ValidatorMessageModule,
        AlertModule
    ],
    exports:[
      EditEquipamentoComponent,
    ]
})
export class EquipamentoModule{}
