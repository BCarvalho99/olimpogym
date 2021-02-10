import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { BoletoComponent } from './boleto/boleto.component';
import { CartaoComponent } from './cartao/cartao.component';
import { MensagemButtonComponent } from './mensagem-button/mensagem-button.component';
import { MensalidadeComponent } from './mensalidade.component';
import { ReactiveFormsModule } from '@angular/forms';
import { TemplateModule } from '../../template/template.module';
import { ScrollModule } from 'src/app/shared/components/scroll/scroll.module';
import { RouterModule } from '@angular/router';

@NgModule({
    declarations: [
        BoletoComponent,
        CartaoComponent,
        MensagemButtonComponent,
        MensalidadeComponent
    ],
    imports: [ 
        CommonModule,
        ReactiveFormsModule,
        TemplateModule,
        ScrollModule,
        RouterModule
    ]
})

export class MensalidadeModule{}