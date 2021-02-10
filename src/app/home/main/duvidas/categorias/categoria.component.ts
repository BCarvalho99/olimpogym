import { Component, OnInit, Output, EventEmitter, Input, OnChanges, SimpleChanges } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';

import { DuvidaService } from '../../../../shared/services/duvida.service';
import { Pagination } from 'src/app/shared/model/Pagination/pagination';
import { ObterDuvidaDto } from 'src/app/shared/model/duvida/obterDuvidaDto';
import { PaginationFilter } from 'src/app/shared/model/Pagination/paginationFilter';

@Component({
    selector: 'ac-categorias',
    templateUrl: './categoria.component.html',
    styleUrls: ['./categoria.component.css']
})
export class CategoriaComponent implements OnInit, OnChanges {

    categorias = new Array<string>();
    categoriaFormGroup: FormGroup;
    paginationFilter: PaginationFilter;
    @Input() page:number = 1;
    @Output() obterDuvida = new EventEmitter<Pagination<ObterDuvidaDto>>();


    constructor(private formBuilder: FormBuilder, private duvidaService: DuvidaService){}

    ngOnChanges(changes: SimpleChanges): void {
        if(changes.page){
            this.pesquisar();
        }
    }

    ngOnInit(): void {
        this.categorias.push("MUSCULAÇÃO");
        this.categorias.push("GINÁSTICA");
        this.categorias.push("ACADEMIA");

        this.categoriaFormGroup = this.formBuilder.group({
            search: ['']
        });
    }

    pesquisar(){
        let paginationFilter = this.categoriaFormGroup?.getRawValue() as PaginationFilter;
        this.duvidaService.get(paginationFilter, this.page).subscribe(duvidas => { this.obterDuvida.emit(duvidas), console.log(duvidas)});
    }

}