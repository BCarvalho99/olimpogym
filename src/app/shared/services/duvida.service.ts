import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import {environment} from '../../../environments/environment.prod';
import { NovaDuvidaDto } from '../model/duvida/novaDuvidaDto';
import { ObterDuvidaDto } from '../model/duvida/obterDuvidaDto';
import { AtualizarDuvidaDto } from '../model/duvida/atualizarDuvidaDto';
import { Pagination } from '../model/Pagination/pagination';
import { PaginationFilter } from '../model/Pagination/paginationFilter';

const API = environment.urlBase + "duvidas";
@Injectable({providedIn: 'root'}) 
export class DuvidaService{

    constructor(private http: HttpClient){}

    post(novaDuvidaDto: NovaDuvidaDto){
        return this.http.post(API, novaDuvidaDto);
    }

    get(paginationFilter: any = null, page :number = 1){
        return this.http
        .get<Pagination<ObterDuvidaDto>>
            (API + `?page=${page}&perpage=${paginationFilter != null?paginationFilter.perPage:10}&search=${paginationFilter != null ? paginationFilter.search : ''}`);
    }

    getById(id: number){
        return this.http.get(API + id);
    }

    put(atualizarDuvida: AtualizarDuvidaDto){
        return this.http.put(API, atualizarDuvida);
    }

    delete(id: number){
        return this.http.delete(API + id);
    }
}