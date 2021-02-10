import {Component, OnChanges, SimpleChanges, OnInit} from '@angular/core';

import { Pagination } from 'src/app/shared/model/Pagination/pagination';
import { ObterDuvidaDto } from "../../../shared/model/duvida/obterDuvidaDto";
import { ActivatedRoute } from '@angular/router';

@Component({
    selector: 'ac-duvida',
    templateUrl: './duvida.component.html',
    styleUrls: ['./duvida.component.css']
})
export class DuvidaComponent implements OnInit, OnChanges{
    
    obter: Pagination<ObterDuvidaDto>

    constructor(private activatedRoute: ActivatedRoute){}

    ngOnChanges(changes: SimpleChanges): void {
        this.obter = this.activatedRoute.snapshot.data['obterDuvidas'];
    }
    
    ngOnInit(): void {
        this.obter = this.activatedRoute.snapshot.data['obterDuvidas'];
    }


    
    
}