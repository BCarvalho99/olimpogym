import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';

import { DuvidaComponent } from './duvida.component';
import { PerguntaComponent } from './perguntas/pergunta.component';
import { CategoriaComponent } from './categorias/categoria.component';
import { ModalidadeComponent } from './categorias/Modalidade/modalidade.component';

import { PaginationModule } from '../../../shared/components/pagination/pagination.module';
@NgModule({
    declarations: [
        DuvidaComponent,
        PerguntaComponent,
        CategoriaComponent,
        ModalidadeComponent
    ],
    exports:[
        DuvidaComponent,
        PerguntaComponent,
        CategoriaComponent
    ],
    imports:[
        CommonModule,
        ReactiveFormsModule,
        PaginationModule
    ]
})
export class DuvidaModule{

}